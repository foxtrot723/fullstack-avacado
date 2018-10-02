import React, { Component } from 'react'

class NoteForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            tag: '',
            body: ''
        }
    }

    // createNote = () => {
    //     axios.post('/notes')
    //     .then(response => {
    //         this.setState(prevState => ({
    //             allNotes: [...prevState.allNotes, response]
    //         }))
    //     })
    // }

    handleSubmit = event => {
        event.preventDefault()
        let newNote = {
            title: this.state.title,
            tag: this.state.tag,
            body: this.state.body
        }
        this.props.createNote(newNote)
        this.setState({
            title: '',
            tag: '',
            body: ''
        })
    }

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <input type = "text" placeholder = "title" />
                <input type = "text" placeholder = "tag" />
                <input type = "text" placeholder = "body" />
                <input type = "button" value = "submit" onClick = { this.handleSubmit } />
                <input type = "button" value = "exit" onClick = { this.props.toggleNoteForm } />
            </form>
        )
    }
}

export default NoteForm