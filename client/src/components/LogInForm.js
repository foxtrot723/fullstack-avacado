import React, { Component } from 'react'

class LogInForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            password: ''
        }
    }

    handleUserChange = e => {
        e.preventDefault()
        this.setState({
            name: e.target.value
        })
    }

    handlePasswordChange = e => {
        e.preventDefault()
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const existingUser = {
            name: this.state.name,
            password: this.state.password
        }
        this.props.findUser(existingUser)
        this.setState({
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
                    <input type='button' value='Cancel' onClick = { this.props.toggleLoginForm } />
                </form>
            </div>
        )
    }
}

export default LogInForm