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
    this.setState({
      circleHover: bool 
    })
  }

  render() {
    
    const {status, src, handleHover} = this.props;
    const {circleHover} = this.state;

    const circleState = circleHover ? {...styles.div, ...styles.hovered} : {...styles.div} 

    return (
      <div 
        style={styles.container} 
        className='CircleImageIcon'>
          <img
            style={styles.img}
            src={src} />
          <div 
            style={circleState}
            onMouseOver={() => {this.handleHover(true)}}
            onMouseOut={() => {this.handleHover(false)}}>
          </div>
      </div>
    );
  }
}

const styles = {
  img: {
    borderRadius: '100%',
    width: '40px'
  },
  hovered: {
    backgroundColor: 'blue',
    'cursor': 'pointer'
  },
  div: {
    borderRadius: '100%',
    width: '14px',
    height: '14px',
    position: 'relative',
    backgroundColor: '#8CB738',
    top: '-20px',
    left: '29px',
    border: '3px solid white',
  },
  container: {
    'display': 'inline-block',
    'cursor': 'pointer',
    'height': '40px'
  }
};


CircleImageIcon.propTypes = {
  src: PropTypes.string,
  status: PropTypes.string
};

export default CircleImageIcon;


