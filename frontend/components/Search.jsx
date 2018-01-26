import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'Search Skype'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
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
      });
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <form className="search-skype">
      <i className="fa fa-search icon-blue" aria-hidden="false"></i>
      <input 
        text="text" 
        value={ searchTerm }
        onChange={ this.handleChange } 
        onFocus={() => (this.handleFocus())} 
        onBlur={() => (this.handleFocusOut())} />
      </form>
    );
  }

}

export default Search;