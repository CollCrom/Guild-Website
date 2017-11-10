import React, { Component } from 'react';
import Head from './Header/Header.js'
import Homepage from './Homepage/Homepage.js'
import Contact from './Contact/Contact.js'
import Roster from './Roster/Roster.js'

class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Homepage/>
        <Roster/>
        <Contact/>
      </div>
    );
  }
}

export default App;
