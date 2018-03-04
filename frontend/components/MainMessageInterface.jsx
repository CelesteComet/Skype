import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';

class MainMessageInterface extends Component {

  // componentDidMount() {
  //   console.log("NEW MOUNT")
  // }


  render() {
    const {currentUserId} = this.props;
    let received = false;
    return (
      <div className="main-message-interface">
        {this.props.messages.map(msg => {

          if (currentUserId !== msg.user_id) {
            received = true;
          }

          return (
            <MessageItem 
              key={msg.id}
              message={msg}
              received={received}/>
            )
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: Object.values(state.messages),
    currentUserId: state.session.currentUser.id
  }
}

export default connect(mapStateToProps, null)(MainMessageInterface);