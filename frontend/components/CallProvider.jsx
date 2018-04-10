import React, { Component } from 'react';

class CallProvider extends Component {
  constructor(props) {
    super(props);
  }

  handleCall() {
    console.log("CALLING")
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { handleCall: this.handleCall })}
      </div>
    );
  }
}

export default CallProvider;