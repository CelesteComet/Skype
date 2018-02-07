import React, { Component } from 'react';
import { toggleContactsList } from '../actions/uiActions';
import { connect } from 'react-redux';

class AsideButtons extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <ul className="aside-buttons">
        <span>
          <li className='aside-contacts' onClick={() => { dispatch(toggleContactsList())}}><span></span></li>
          <li className='aside-robot'><span></span></li>
          <li className='aside-phonepad'><span></span></li>
          <li className='aside-gear'><span></span></li>
        </span>
        <li className='aside-plus'><span></span></li>
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(null, mapDispatchToProps)(AsideButtons);