// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { makeUser } from '../redux'
// import { signup } from '../redux/auth'


// class SignUpForm extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: '',
    //         password: '',
    //         inputs: []
    //     }
    // }

    // handleUserChange = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handlePasswordChange = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const user = {
    //         username: this.state.name,
    //         password: this.state.password
    //     }
    //     this.props.makeUser(user)
    //     this.setState ({
    //         name: '',
    //         password: ''
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.signup(this.state.inputs)
    //     this.clearInputs()
    // }

    // render(){
    //     return(
    //         <div>
                /* <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input className = "text-boxes" type='text' value={this.state.name} onChange={this.handleUserChange} />
                    </label>
                    <label>
                        Password:
                        <input className = "text-boxes" type='text' value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type='button' value='Submit' onClick = { this.handleSubmit } />  
                    <input type='button' value='Cancel' onClick = { this.props.toggleSignUpForm } />
                </form> */
            /* </div>
        )
    }

}

export default connect(state => state, { makeUser, signup })(SignUpForm) */

// import {connect} from "react-redux";
// import {signup} from "../../redux/auth";

// class SignupForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             inputs: []
//         }
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.signup(this.state.inputs);
//         this.clearInputs();
//     }
// }

// export default connect(null, {signup})(SignupForm);

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../redux/auth'

class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            inputs: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    // Ramda, purely functional library
    // functional programming does not mantain state
    // a class is the combination of state and behavior
    // perfect functions take in data and output data
    // closure is a function inside of a function
    // currying is a function that returns a function
    // lowdash
    // function signature describes how the object is oriented
    // compose (end to front), pipe (front to end)
    // unary (takes 1 parameter), binary (takes 2 parameter)

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state.inputs)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                username: '',
                password: ''
            }
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input name = "username" type='text' value = {this.state.inputs.username} onChange = {this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input name = "password" type='text' value = {this.state.inputs.password} onChange = {this.handleChange} />
                    </label>
                    <input type='submit' value='Submit' onClick = { this.handleSubmit } />  
                    <input type='button' value='Cancel' />
                </form>
            </div>
        )
    }
}

export default connect(null, { signUp })(SignUpForm)