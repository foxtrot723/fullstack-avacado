import React from 'react'
import CurrentNote from './CurrentNote'
import Notes from './Notes'
import NoteForm from './NoteForm'
import { connect } from 'react-redux'
import { getNotes } from '../redux/notes'
import './notespage.css'

class NotesPage extends React.Component {
    constructor() {
        super()
        this.state = {
            allNotes: [],
            currentNote: [],
            noteForm: true
        }
    }

    componentDidMount() {
       this.props.getNotes()
    }

    deleteNote = () => {
        this.props.deleteNote(this.state.currentNote._id)
    }

    toggleNoteForm = event => {
        event.preventDefault()
        this.setState(prevState => ({
            noteForm: !prevState.noteForm
        }))
    }

    handleClick = (id) => {
        this.setState(prevState => ({
            currentNote: prevState.allNotes.find(function (note) { return note._id === id })
        }))
    }

    render() {
        console.log(this.props.notes)
        return (
            <div className = "notes-page">
                <div className = "button-container">
                    <input type = "button" value = "make a note" className = "new-note-button buttons" onClick = { this.toggleNoteForm } />
                    <input type = "button" value = "delete a note" className = "delete-note-button buttons" onClick = { this.deleteNote } />
                </div>
                {
                    this.state.noteForm ?
                        <div></div>
                    :
                        <div className = "flex-card-form-container">
                            <div className = "new-note-form-bg" onClick = { this.toggleNoteForm }></div>
                            <NoteForm toggleNoteForm = { this.toggleNoteForm } />
                        </div>
                }
                <div className = "current-note">
                {
                    this.state.currentNote.length > 0 ?
                    <div>
                        <h1>{ this.state.currentNote.title }</h1>
                        <p>{ this.state.currentNote.body }</p>
                    </div>
                    :
                    <div></div>
                }
                </div>
                <div className = "notes-container">
                    {
                        this.props.notes.map(note => {
                            return(
                                <div className = "notes-containers" onClick = { () => this.handleClick(note._id)}>
                                    <Notes key = { note._id }
                                           id = { note._id }
                                           body = { note.body }
                                           title = { note.title }/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect(state => state, { getNotes })(NotesPage)

// { getNotes }