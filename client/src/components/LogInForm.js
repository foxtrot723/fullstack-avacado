// import React, { Component } from 'react'

// class LogInForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: '',
//             password: ''
//         }
//     }

//     handleUserChange = e => {
//         e.preventDefault()
//         this.setState({
//             name: e.target.value
//         })
//     }

//     handlePasswordChange = e => {
//         e.preventDefault()
//         this.setState({
//             password: e.target.value
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         const existingUser = {
//             name: this.state.name,
//             password: this.state.password
//         }
//         this.props.findUser(existingUser)
//         this.setState({
//             name: '',
//             password: ''
//         })
//     }
    
//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Username:
//                         <input type='text' value={this.state.name} onChange={this.handleUserChange} />
//                     </label>
//                     <label>
//                         Password:
//                         <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
//                     </label>
//                     <input className = "buttons" type='button' value='Submit' onClick = { this.handleSubmit } />  
//                     <input className = "buttons" type='button' value='Cancel' onClick = { this.props.toggleLoginForm } />
//                 </form>
//             </div>
//         )
//     }
// }

// export default LogInForm

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../redux/auth'

class LogInForm extends Component {
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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.inputs)
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
                        <input name = "username" type='text' value={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input name = "password" type='text' value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Submit' onClick = { this.handleSubmit } />  
                    <input type='button' value='Cancel' />
                </form>
            </div>
        )
    }

}

export default connect(null, { login })(LogInForm)