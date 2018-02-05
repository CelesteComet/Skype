import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../actions/messageActions';

class InputMessageInterface extends Component {

  constructor(props) {
    super(props);
    const roomId = props.roomId;
    this.state = {
      body: '',
      room_id: props.roomId 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(createMessage(this.state));
  } 

  render() {
    return (
      <div className='input-message-interface'>
        <div className='form-holder'>
          <div className='input-header'>
            <p>Via <a>Skype</a></p>
          </div>
          <div className='input-message-input'>
            <form onSubmit={this.handleSubmit}>
              <textarea onChange={this.handleChange}/>
              <div className='icon-set'>
                <i className="fa fa-paperclip" aria-hidden="true"></i>
                <i className="fa fa-picture-o" aria-hidden="true"></i>
                <i className="fa fa-id-card" aria-hidden="true"></i>
                <i className="fa fa-smile-o" aria-hidden="true"></i>
              </div>
              <input type='submit' value='send message' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomId: state.ui.currentRoomId  
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessageInterface);