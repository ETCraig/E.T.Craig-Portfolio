import React, { Component } from 'react';

import Routes from './Router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#F8F8F8"}}>
        <NavBar />
        {Routes}
        <Footer />
      </div>
    );
  }
}

export default App;
