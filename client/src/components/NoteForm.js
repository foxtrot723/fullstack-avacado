import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../redux/notes'

class NoteForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            tag: '',
           body: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        let newNote = {
            title: this.state.title,
            tag: this.state.tag,
            body: this.state.body
        }
        this.props.addNote(newNote)
        this.setState({
            title: '',
            tag: '',
            body: '',
            formVis: false
        })
    }

    handleTitleChange = event => {
        event.preventDefault()
        this.setState({
            title: event.target.value
        })
    }

    handleTagChange = event => {
        event.preventDefault()
        this.setState({
            tag: event.target.value
        })
    }

    handleBodyChange = event => {
        event.preventDefault()
        this.setState({
            body: event.target.value
        })
    }

    render() {
        
        return (
            <form className = "new-note-form" onSubmit = { this.handleSubmit }>
                <input className = "input-form-containers input-title-new-card" type = "text" placeholder = "title" onChange = { this.handleTitleChange} />
                <input className = "input-form-containers input-tag-new-card" type = "text" placeholder = "tag" onChange = { this.handleTagChange} />
                <input className = "input-form-containers input-body-new-card" type = "text" placeholder = "body" onChange = { this.handleBodyChange} />
                <input className = "submit-new-card-button" type = "button" value = "submit" onClick = { this.handleSubmit } />
            </form>
        )
    }
}

export default connect(state => state, { addNote })(NoteForm)