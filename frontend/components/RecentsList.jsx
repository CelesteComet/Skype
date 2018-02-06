import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RecentsListItem from './RecentsListItem';

class RecentsList extends Component {
  render() {
    const {recents} = this.props;

    const recentsJSX = recents.map(contact => {
      return (
        <RecentsListItem 
          key={contact.id}
          name={contact.name}
          message={contact.msg}
        />
      );
    });


    return (
      <ul className="recents-list">
        { recentsJSX }
      </ul>
    )
  }
}
  
const mSTP = state => {
  return {
    recents: Object.values({
      1: {id: 1, name: 'Alice', msg: "Nothing is impossible to a willing hear"},
      2: {id: 2, name: 'busuu', msg: "3 participants"},
      3: {id: 3, name: 'San Sae', msg: "Away"},
      4: {id: 4, name: 'Bruce Wong', msg: "Cupertino, US"}
    })
  };
};

const mDTP = dispatch => {
  return {
    dispatch
  };
};

RecentsList.propTypes = {
  recents: PropTypes.array
}

export default connect(mSTP, mDTP)(RecentsList);

