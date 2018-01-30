import React, { Fragment } from 'react';

import SideBar from './SideBar';
import Main from './Main';
import Footer from './Footer';



const App = () => {
  return (
    <Fragment>
      <div> 
        <SideBar />
        <Main />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;















