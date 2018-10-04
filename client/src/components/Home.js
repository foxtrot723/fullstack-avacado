import React, { Component } from 'react'
// import SignUpForm from './SignUpForm'
// import LogInForm from './LogInForm'
import './home.css'
import Slider from './Slider'


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
            <div>
                <Slider />
            </div>
        )
    }

}

export default Home