import React, { Component } from 'react';
import { toggleContactsList } from '../actions/uiActions';
import { connect } from 'react-redux';

class AsideButtons extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <ul className="aside-buttons">
        <li><span onClick={() => { dispatch(toggleContactsList())}}>Contacts List</span></li>
        <li><span>Other stuff</span></li>
        <li><span>Other stuff</span></li>
        <li><span>Other stuff</span></li>
        <li><span>Other stuff</span></li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(null, mapDispatchToProps)(AsideButtons);