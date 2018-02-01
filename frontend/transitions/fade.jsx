import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import React from 'react';

function Fade({children}) {
  return (
    <div className="full-container">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppear={true}
        component='div'>
        {children}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default Fade;