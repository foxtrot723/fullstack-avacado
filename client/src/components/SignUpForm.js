import React, { Component } from 'react';
import { connect } from 'react-redux'
import { makeUser } from '../redux'


class SignUpForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
        }
    }

    handleUserChange = (event) => {
        event.preventDefault()
        this.setState({
            name: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        event.preventDefault()
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            username: this.state.name,
            password: this.state.password
        }
        this.props.makeUser(user)
        this.setState ({
            name: '',
            password: ''
        })
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type='text' value={this.state.name} onChange={this.handleUserChange} />
                    </label>
                    <label>
                        Password:
                        <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type='button' value='Submit' onClick = { this.handleSubmit } />  
                    <input type='button' value='Cancel' onClick = { this.props.toggleSignUpForm } />
                </form>
            </div>
        )
    }

}

export default connect(state => state, { makeUser })(SignUpForm)