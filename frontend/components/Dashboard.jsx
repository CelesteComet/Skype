import React, { Fragment, Component } from 'react';
import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';
import ModalProfile from './ModalProfile/ModalProfile';

// Actions
import { logoutUser } from '../actions/sessionActions';
import { fetchRoomMemberships } from '../actions/roomMembershipActions'
import { fetchAllFriends } from '../actions/friendActions';

import { connect } from 'react-redux';
import titleService from '../services/titleService';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // get all friends 
    dispatch(fetchAllFriends());
  }

  render() {
    const { dispatch, modalView } = this.props;
    return (
      <Fragment>
        <div className="dashboard">
          { modalView && <ModalProfile /> }
          <SideBar />
          <Main />
        </div>
        <Footer />
      </Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    modalView: state.ui.profileModalView
  }
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);