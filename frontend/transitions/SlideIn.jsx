import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import React from 'react';

function SlideIn({children}) {
  return (
    <div className="slide-in-left-container">
      <ReactCSSTransitionGroup
        transitionName="slide-in-left"
        transitionEnterTimeout={150}
        transitionLeaveTimeout={150}
        transitionLeave={ false }
        component='div'>
        {children}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default SlideIn;