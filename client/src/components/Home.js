import React, { Component } from 'react'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import './home.css'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            signupVisible: false,
            loginVisible: false
        }
    }

    toggleSignUpForm = () => {
        this.setState(prevState => ({
            signupVisible: !prevState.signupVisible
        }))
    }

    toggleLoginForm = () => {
        this.setState(prevState => ({
            loginVisible: !prevState.loginVisible
        }))
    }

    render() {
        return(
            <div className="homeContent">
                <div className="homeDescription">
                    <h1>Avocado Notes</h1>
                    <h2>What is Avocado?</h2>
                    <p>Glad you asked!</p>
                    <p>Avocado is an organic web application for taking and storing notes online.</p>
                    <p>Freedom to edit and create personalized notes!</p>
                    <p>Made for developers by developers</p>
                    <p>Create a free account and give it a try</p>
                </div>

                <div className="signUpOrLogin">
                    <input type='button' className='sign-up-button' value = 'sign up' onClick = { this.toggleSignUpForm } />
                    {
                        this.state.signupVisible && !this.state.loginVisible ?
                            <SignUpForm toggleSignUpForm = { this.toggleSignUpForm } />
                        :
                            <div></div>
                    }
                    <input type = 'button' className = 'log-in-button' value = 'log in' onClick = { this.toggleLoginForm } />
                    {
                        this.state.loginVisible ?
                            <LogInForm toggleLoginForm = { this.toggleLoginForm } />
                        :
                            <div></div>
                    }
                </div>
            </div>
        )
    }

}

export default Home