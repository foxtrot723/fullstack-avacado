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
            name: '',
            password: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signUp(this.state.inputs)
        this.clearInputs()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type='text' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type='text' value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit' />  
                    <input type='button' value='Cancel' />
                </form>
            </div>
        )
    }

}

export default connect(null, { signUp })(SignUpForm)