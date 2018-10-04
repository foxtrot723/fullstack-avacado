import React from 'react'
import CurrentNote from './CurrentNote'
import Notes from './Notes'
import NoteForm from './NoteForm'
import { connect } from 'react-redux'
// import { getNotes } from '../redux'
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

    // deleteNote = () => {
    //     axios.delete(`/notes/${id}`)
    //     .then(response => {
    //         this.setState(({
    //             allNotes: prevState.allNotes.filter(note => {
        
    //             })
    //         }))
    //     })
    // }

    toggleNoteForm = event => {
        event.preventDefault()
        this.setState(prevState => ({
            noteForm: !prevState.noteForm
        }))
    }

    render() {
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
                </div>
                <div className = "notes-container">
                    {
                        this.state.allNotes.map(note => {
                            return <Notes key = { note._id }
                                          title = { note.title }
                                          tag = { note.tag }
                                          body = { note.body }
                                        //   date = { note.date }
                                          user = { note.user }/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect(state => state, )(NotesPage)

// { getNotes }