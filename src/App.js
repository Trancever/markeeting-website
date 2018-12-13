import React, { Component } from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import Regulations from './Regulations';
import ParkPage from './ParkPage';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div ref={this.topSection} className="App">
        <Router>
          <Home path="/" />
          <Regulations path="/regulations" />
          <ParkPage path="/park/:name" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
