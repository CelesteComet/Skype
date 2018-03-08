import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class CircleImageIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      circleHover: false
    }
  }

  handleHover(bool) {
    let { canHover } = this.props;
    if (canHover) {
      this.setState({
        circleHover: bool 
      })
    }
  }

  render() {
    
    const {statusId, src, handleHover, statusIcon} = this.props;
    const {circleHover} = this.state;

     

    // Background color for the status icon
    let backgroundColor;
    let borderColor;
    let boxShadow = '0 0 0 3px white';
    if (statusId === 0) {
      backgroundColor = 'white';
      borderColor = '#94999C';
    } else if (statusId === 1) {
      backgroundColor = '#8CB738';
      borderColor = '#8CB738';
    } else {
      backgroundColor = '#F6D24B';
      borderColor = '#F6D24B';
    }

    let styles = {
      img: {
        borderRadius: '100%',
        width: '40px',
        backgroundColor: '#97D8F5'
      },
      hovered: {
        backgroundColor: '#CEECFA',
        borderColor: '#CEECFA',
        'cursor': 'pointer'
      },
      div: {
        borderRadius: '100%',
        borderColor: `${borderColor}`,
        width: '10px',
        height: '10px',
        position: 'relative',
        backgroundColor: 'white',
        top: '-16px',
        left: '29px',
        border: `2px solid ${borderColor}` ,
        boxShadow: boxShadow
      },
      container: {
        'display': 'inline-block',
        'cursor': 'pointer',
        'height': '40px'
      }
    };

    styles.div.backgroundColor = backgroundColor;
    const circleState = circleHover ? {...styles.div, ...styles.hovered} : {...styles.div}

    return (

      <div 
        style={styles.container} 
        className='CircleImageIcon'>
          <img
            style={styles.img}
            src={src} />
          { statusIcon && <div 
            style={circleState}
            onMouseOver={() => {this.handleHover(true)}}
            onMouseOut={() => {this.handleHover(false)}}>
          </div>}
      </div>
    );
  }
}

export default CircleImageIcon;


