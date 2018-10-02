import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NotesPage from './components/NotesPage'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path = '/' component = { Home } />
          <Route path = '/notes' component = { NotesPage } />
          <Route path = '/contact' component = { Contact } />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
