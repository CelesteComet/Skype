import React, { Fragment, Component } from 'react';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';
import ModalProfile from './ModalProfile/ModalProfile';
import configureSocket from '../configureSocket';

// Actions
import { logoutUser } from '../actions/sessionActions';
import { fetchRoomMemberships } from '../actions/roomMembershipActions'
import { fetchAllFriends } from '../actions/friendActions';
import { fetchAllMessages } from '../actions/messageActions';

import { connect } from 'react-redux';
import titleService from '../services/titleService';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // get all friends, then get all the memberships
    dispatch(fetchAllFriends()).then(() => {
      dispatch(fetchRoomMemberships()).then((e) => {
        const { dispatch, state} = this.props;
        const roomMemberships = Object.values(state.roomMemberships);
        const chatroomIds = [...new Set(roomMemberships.map(m => m.room_id))];
        configureSocket(this, chatroomIds, dispatch);
        dispatch(fetchAllMessages());
      });
    });
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