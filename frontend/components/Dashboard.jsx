import React, { Fragment, Component } from 'react';

// Import Misc
import { configureSocket } from '../configureSocket';
import Peer              from 'simple-peer';

// Import Actions
import { logoutUser, getUser }      from '../actions/sessionActions';
import { fetchRoomMemberships }     from '../actions/roomMembershipActions'
import { fetchRooms, receiveRooms } from '../actions/roomActions';
import { fetchAllFriends }          from '../actions/friendActions';
import { 
  fetchAllMessages, 
  fetchRoomMessages }           from '../actions/messageActions';
import { showContactsList }     from '../actions/uiActions';
import { connect }              from 'react-redux';
import titleService             from '../services/titleService';

// Import Components
import SideBar      from './SideBar';
import Main         from './Main';
import Footer       from './Footer';
import ModalProfile from './ModalProfile';
import ContextMenu  from './ContextMenu';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    titleService.changeFavicon("images/skypeicon.png");
  }

  componentDidMount() {
    const { fetchRooms, fetchFriends, receiveRooms, dispatch, state } = this.props;
    fetchFriends();
    fetchRooms().then(rooms => {
      receiveRooms(rooms);
      configureSocket(Object.keys(rooms), dispatch, state);
    })
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
          <ContextMenu />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalView: state.ui.profileModalView,
    rooms: state.rooms,
    state
  }
};

const mapDispatchToProps = dispatch => {
  return { 
    fetchRooms: () => { return dispatch(fetchRooms()) },
    fetchFriends: () => { return dispatch(fetchAllFriends()) },
    receiveRooms: rooms => { return dispatch(receiveRooms(rooms)) },
    dispatch 
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);