import React, { Fragment, Component } from 'react';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';
import ModalProfile from './ModalProfile';
import {configureSocket} from '../configureSocket';

import Peer from 'simple-peer';

// Actions
import { logoutUser, getUser } from '../actions/sessionActions';
import { fetchRoomMemberships } from '../actions/roomMembershipActions'
import { fetchAllFriends } from '../actions/friendActions';
import { fetchAllMessages, fetchRoomMessages } from '../actions/messageActions';
import { showContactsList } from '../actions/uiActions';

import { connect } from 'react-redux';
import titleService from '../services/titleService';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    this.configurePeer(); 

    // get all friends, then get all the memberships
    dispatch(fetchAllFriends()).then(() => {
      dispatch(fetchRoomMemberships()).then((e) => {
        const { dispatch, state} = this.props;
        const roomMemberships = Object.values(state.roomMemberships);
        const chatroomIds = [...new Set(roomMemberships.map(m => m.room_id))];
        dispatch(getUser());
        configureSocket(chatroomIds, dispatch);

        // if the user currently does not belong to any rooms, bring him to contacts
        if (roomMemberships.length === 0) {
          dispatch(showContactsList());
        }
        //dispatch(fetchRoomMessages(1));
      });
    });
  }

  configurePeer() {

  }



  render() {
    const { dispatch, modalView } = this.props;
    return (
      <Fragment>
        <div className="dashboard">
          { modalView && <ModalProfile /> }
          <SideBar />
          <Main />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalView: state.ui.profileModalView,
    state
  }
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);