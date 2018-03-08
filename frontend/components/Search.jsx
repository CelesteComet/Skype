import React, { Component } from 'react';
import { connect } from 'react-redux';
import PotentialFriendsList from './PotentialFriendsList';
import AsideButtons from './AsideButtons';
import { 
  findPotentialFriends
} from '../actions/friendActions';

import {
  showSearchDirectoryButton,
  hideSearchDirectoryButton,
  showInSearch,
  hideInSearch  
} from '../actions/uiActions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Search Skype',
      inSearch: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.findPotentialFriends = this.findPotentialFriends.bind(this);
  }

  handleClear() {
    this.setState({
      searchTerm: 'Search Skype'
    }, () => {
      const { dispatch } = this.props;
      dispatch(findPotentialFriends(this.state.searchTerm));
    })
  }

  handleChange(e) {
    const { dispatch } = this.props;
    this.setState({
      searchTerm: e.target.value
    }, () => {
      let searchTerm = this.state.searchTerm;
      if (searchTerm.length > 0) {
        dispatch(showSearchDirectoryButton());
      } else {
        dispatch(hideSearchDirectoryButton());
        dispatch(hideInSearch());
        // this.setState({
        //   isSearch: false
        // })
      }
      // dispatch(findPotentialFriends(searchTerm));
    });
  }

  handleFocus(e) {
    const { searchTerm } = this.state;
    if (searchTerm === 'Search Skype') {
      this.setState({
        searchTerm: ''
      });
    }
  }

  handleFocusOut(e) {
    const { searchTerm } = this.state;

    if (searchTerm.length === 0) {
      this.setState({
        searchTerm: 'Search Skype'
      }, () => {
        const { dispatch } = this.props;
        dispatch(hideInSearch());
      });
    }
  }

  findPotentialFriends() {
    let { dispatch } = this.props;
    dispatch(showInSearch());
    dispatch(findPotentialFriends(this.state.searchTerm));
  }

  render() {
    const { searchTerm } = this.state;
    const { directoryButton, potentialFriends, inSearch } = this.props;
    return (
      <div>
        <AsideButtons />
        <form className="search-skype hide-at-small">
          <div>
            <i className="fa fa-search icon-blue" aria-hidden="false"></i>
            <input 
              text="text" 
              value={ searchTerm }
              onChange={ this.handleChange } 
              onFocus={() => (this.handleFocus())} 
              onBlur={() => (this.handleFocusOut())} />
            <i className="fa fa-times icon-blue" aria-hidden="true" onClick={() => {this.handleClear()}}></i>
          </div>
        </form>
        {directoryButton && 
          <button className='potentials-button' onClick={this.findPotentialFriends}>Search Skype Directory</button> }
          {inSearch && <p className='potential-title'>Directory</p>}
          {inSearch && <PotentialFriendsList />}
        {inSearch && potentialFriends.length == 0 && <p className='potential-friends-status'>No results found</p>}
      </div>

    );
  }
}

const mapStateToProps = state => {
  return { 
    directoryButton: state.ui.directoryButton,
    inSearch: state.ui.inSearch,
    potentialFriends: Object.values(state.potentialFriends)
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);




