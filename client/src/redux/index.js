

// const initState = {
//     notes: [],
//     currentUser: [],
//     foundUser: []
// }

// export const getNotes = () => {
//     return dispatch => {
//         axios.get('/notes')
//         .then(response => {
//             dispatch({
//                 type: "GET_NOTES",
//                 notes: response.data
//             })
//         })
//     }
// }

// export const editNote = (id) => {
//     return dispatch => {
//         axios.put('/notes/${id}')
//         .then(response => {
//             dispatch({
//                 type: "EDIT_NOTE",
//                 note: response.data
//             })
//         })
//     }
// }

// export const deleteNote = (id) => {
//     return dispatch => {
//         axios.delete('/notes/${id}')
//         .then(response => {
//             dispatch({
//                 type: "DELETE_NOTE",
//                 notes: response.data
//             })
//         })
//     }
// }

// export const createNote = (newNote) => {
//     return dispatch => {
//         axios.post('/notes')
//         .then(response => {
//             dispatch({
//                 type: "CREATE_NOTE",
//                 newNote: response.data 
//             })
//         })
//     }
// }

// export const makeUser = () => {
//     return dispatch => {
//         axios.post('/user')
//         .then(response => {
//             dispatch({
//                 type: "MAKE_USER",
//                 currentUser: response.data
//             })
//         })
//     }
// }

// export const findUser = (id) => {
//     return dispatch => {
//         axios.get(`/user/${id}`)
//         .then(response => {
//             dispatch({
//                 type: "FIND_USER",
//                 foundUser: response.data
//             })
//         })
//     }
// }

// const reducer = (prevState = initState, action) => {
//     switch(action.type) {
//         case "GET_NOTES":
//             return {
//                 notes: action.notes,
//                 currentUser: prevState.currentUser,
//                 foundUser: prevState.foundUser
//             }
//         case "MAKE_USER":
//             return {
//                 currentUser: action.currentUser,
//                 notes: prevState.notes,
//                 foundUser: prevState.foundUser
//             }
//         case "FIND_USER":
//             return {
//                 notes: prevState.notes,
//                 currentUser: prevState.currentUser,
//                 foundUser: action.foundUser
//             }
//         case "CREATE_NOTE":
//             return {
//                 notes: [...prevState.notes, action.newNote],
//                 currentUser: prevState.currentUser,
//                 foundUser: prevState.foundUser
//             }
//         case "EDIT_NOTE":
//             return {
//                 notes: [...prevState.notes, action.note],
//                 currentUser: prevState.currentUser,
//                 foundUser: prevState.foundUser
//             }
        // case "DELETE_NOTE":
        //     return {
        //         notes: ,
        //         currentUser: prevState.currentUser,
        //         foundUser: prevState.foundUser
        //     }
//         default: return prevState
//     }
// }



import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import notes from './notes'
import user from './auth'

// This is combining the auth with the notes reducers
const rootReducer = combineReducers({
    notes,
    user
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)