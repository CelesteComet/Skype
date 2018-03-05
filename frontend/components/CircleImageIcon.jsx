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
    
    const {status, src, handleHover, statusIcon} = this.props;
    const {circleHover} = this.state;

     

    // Background color for the status icon
    let backgroundColor;
    let borderColor;
    let boxShadow = '0 0 0 3px white';
    if (status === 0) {
      backgroundColor = 'white';
      borderColor = '#94999C';
    } else if (status === 1) {
      backgroundColor = 'green';
      borderColor = 'green';
    } else {
      backgroundColor = 'orange';
      borderColor = 'orange';
    }

    let styles = {
      img: {
        borderRadius: '100%',
        width: '40px',
        backgroundColor: '#97D8F5'
      },
      hovered: {
        backgroundColor: 'blue',
        'cursor': 'pointer'
      },
      div: {
        borderRadius: '100%',
        width: '12px',
        height: '12px',
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


