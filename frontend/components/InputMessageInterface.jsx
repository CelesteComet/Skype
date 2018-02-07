import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../actions/messageActions';
import { showMediaUpload, hideMediaUpload } from '../actions/uiActions';

const minRows = 3;

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
    this.handleFocus = this.handleFocus.bind(this);
    this.adjustTextArea = this.adjustTextArea.bind(this);
    this.baseScrollHeight = 0;
    this.dispatch = this.props.dispatch;
  }

  adjustTextArea() {
    let rows = Math.ceil((this.textArea.scrollHeight - this.baseScrollHeight) / 16);
    this.textArea.rows = rows;
  }

  handleChange(e) {
    e.preventDefault();

    this.adjustTextArea();

    this.setState({
      body: e.target.value
    }, () => {
      if (this.state.body.length > 0) {
        this.dispatch(showMediaUpload());
      } else {
        this.dispatch(hideMediaUpload());
      }
    })


  }

  resetForm() {
    this.setState({
      body: '',
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    this.resetForm();
    dispatch(createMessage(this.state)).then(() => {
      this.dispatch(hideMediaUpload());
    });
  } 

  handleFocus() {

    this.baseScrollHeight = this.textArea.scrollHeight;
  }

  render() {
    const { mediaUploadView } = this.props;
    return (
      <div className='input-message-interface'>
        <div className='form-holder'>
          <div className='input-header'>
            <p>Via <a>Skype</a></p>
          </div>
          <div className='input-message-input'>
            <form onSubmit={this.handleSubmit}>
              <textarea 
                onFocus={this.handleFocus}
                onChange={this.handleChange} 
                value={this.state.body}
                rows='2' 
                data-min-rows='2'
                placeholder="Type a message here"
                ref={(textarea) => { this.textArea = textarea; }} />
              <div className='icon-set'>
                {mediaUploadView && <i className="fa fa-paperclip icon-paperclip" aria-hidden="true"></i> }
                {!mediaUploadView && <i className="fa fa-picture-o icon-picture" aria-hidden="true"></i>}
                {/*<i className="fa fa-id-card" aria-hidden="true"></i>*/}
                <i className="fa fa-smile-o" aria-hidden="true"></i>
                <button className='airplane'>
                  <i class="fa fa-paper-plane-o icon-airplane" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomId: state.ui.currentRoomId,
    mediaUploadView: state.ui.mediaUploadView
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMessageInterface);





// Applied globally on all textareas with the "autoExpand" class
// $(document)
//     .one('focus.autoExpand', 'textarea.autoExpand', function(){
//         var savedValue = this.value;
//         this.value = '';
//         this.baseScrollHeight = this.scrollHeight;
//         this.value = savedValue;
//     })
//     .on('input.autoExpand', 'textarea.autoExpand', function(){
//         var minRows = this.getAttribute('data-min-rows')|0, rows;
//         this.rows = minRows;
        // rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        // this.rows = minRows + rows;
//     });