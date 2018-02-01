import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import React from 'react';

function SlideIn({children}) {
  return (
    <div className="full-container">
      <ReactCSSTransitionGroup
        transitionName="slide-in"
        transitionEnterTimeout={150}
        transitionLeaveTimeout={150}
        transitionAppearTimeout={150}
        transitionAppear={true}
        component='div'>
        {children}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default SlideIn;