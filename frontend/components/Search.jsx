import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findPotentialFriends } from '../actions/friendActions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Search Skype'
    };

    this.handleChange = this.handleChange.bind(this);
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
      dispatch(findPotentialFriends(searchTerm));
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
        dispatch(findPotentialFriends(this.state.searchTerm));        
      });
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <form className="search-skype">
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

export default connect(null, mapDispatchToProps)(Search);




