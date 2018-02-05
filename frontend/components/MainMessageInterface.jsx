import React, { Component } from 'react';
import { connect } from 'react-redux';


class MainMessageInterface extends Component {
  render() {
    return (
      <div className="main-message-interface">
        <h1>I AM MAIN MESSAGE INTERFACE</h1>
        {this.props.messages.map(msg => {
          return <li key={msg.id}>{msg.body}</li>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: Object.values(state.messages)
  }
}

export default connect(mapStateToProps, null)(MainMessageInterface);