import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { verify, signUp } from './redux/auth'
import Home from './components/Home'
import NotesPage from './components/NotesPage'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LogIn from './components/LogIn'
import ProtectedRoute from './components/shared/ProtectedRoute'
import './App.css'

class App extends Component {

/////////////////////////////////
// USER AUTHENTICATION METHODS //
componentDidMount(){  // Verify the user everytime the user refreshes/causes the component to remount
  this.props.verify() // This is so while the user navigates around the site, they remain logged in
}

  render() {
    const { isAuthenticated } = this.props.user
    return (
      <div className="App">
        <Navbar />
        <Switch>
          
          <Route exact path = '/' component = { Home } />
          
          <ProtectedRoute 
            path = '/notes'
            redirectTo = '/'
            isAuthenticated = { isAuthenticated }
            render = {() => 
              <NotesPage
                {...this.props}
                addNote = { this.props.addNote }
                notes = { this.props.notes }
                deleteNote = { this.props.deleteNote } />
            } />

            {/* <Route path = '/notes' component = { NotesPage } /> */}

          <Route path = '/contact' component = { Contact } />

          <Route path = '/login' 
                 component = { LogIn }
                 login = { this.props.login } 
                 signup = { this.props.signUp } />

        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(state => ({ user: state.user }), { verify, signUp })(App))
