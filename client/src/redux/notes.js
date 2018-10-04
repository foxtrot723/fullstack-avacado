import axios from 'axios'
const noteAxios = axios.create()

const noteUrl = "/api/notes/"

noteAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const setNotes = notes => {
    return {
        type: "SET_NOTES",
        notes
    }
}

export const getNotes = () => {
    return dispatch => {
        noteAxios.get(noteUrl).then(res => {
            dispatch(setNotes(res.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const addNote = newNote => {
    return dispatch => {
        noteAxios.post(noteUrl, newNote).then(res => {
            dispatch(getNotes())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const deleteNote = id => {
    return dispatch => {
        noteAxios.delete(noteUrl + id).then(res => {
            dispatch(getNotes())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editNote = (id, note) => {
    console.log(id, note)
    return dispatch => {
        noteAxios.put(noteUrl + id, note).then(res => {
            dispatch(getNotes())
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialNotes = []

const notesReducer = (notes = initialNotes, action) => {
    switch(action.type) {
        case "SET_NOTES":
            return [...action.notes]
        default:
            return notes
    }
}

export default notesReducer