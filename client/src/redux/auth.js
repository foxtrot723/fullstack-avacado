import axios from 'axios'

const authAxios = axios.create()

authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


// This is the initial state where everything being imported will be kept and accesible through props
let initialState = {
// This is where the notes will be stored and will be able to map through them
    notes: [],
// this is where we will be storing the current card object of what is going to the Notes page
// This is where the information will be kept for the current user after they sign up/ log in
    user: {
        username: '',
        isAdmin: false,
        _id: ''
    },
// This is where the error will be passed through to display to the user if there was an error
    authErrCode: {
        signup: '',
        login: ''
    },
// This is determining whether the user is authenticated or not
    isAuthenticated: false
}

export function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

// This is so while the user navigates around the site, they remain logged in, it is placed in the app component
export function verify() {
    return dispatch => {
// auth axios allows the token to be passed through
    authAxios.get('/api/profile')
    .then(res => {
        const { user } = res.data
// this is where we allow authentification after the user has been verified
        dispatch(authenticate(user))
        })
    .catch(err => {
        handleAuthErr("verify", err.status)
    })
  }}

export function logout() {
// This removes the token and user object out of local storage when you log out
    localStorage.removeItem("token")
    localStorage.removeItem("user")
// This will go to the reducer where it will reset the initialState
    return {
        type: "LOGOUT"
    }
}

// this is the function that will be called when a user attempts to submit the sign up form
// the inputs are the username and password coming from the sign up form
export function signUp(inputs) {
    return dispatch => {
// It is a post request because it is creating a new user in the db
        axios.post("/auth/signup", inputs)
        .then(response => {
// What returns to us is the token for that user, the user, and whether success is true or false
            const { token, user, success } = response.data
// This is setting the user and token into local storage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
// Then this function is called, which will set this state to the value of user
            dispatch(logon(success, user))
        })
        .catch(err => {
            console.log(err)
// This will give us information about where the error is coming from
            dispatch(handleAuthErr("signup", err.response.status))
        })
    }
}

// When a user clicks the log in button this is the function that will be performed
const logon = (success, user) => {
    console.log(user)
    return {
        type: "LOGON",
// This is passing the user object into initialState
        success,
        user
    }
}

// This function is getting called inside of the signup function and is 
const handleAuthErr = (key, errCode) => {
    return {
        type: "HANDLE_AUTH_ERR",
        key,
        errCode
    }
}

// this is the function that is performed when someone attempts to log in
// The inputs is the object coming from LogInForm
export function login(inputs) {
    return dispatch => {
        axios.post("/auth/login", inputs)
            .then(response => {
// This is taking the response and creating 3 variables with the data
                const { token, user, success } = response.data
// This sets the local storage to have the token and user info
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
// This will allow the user to be logged on with his information passed into the function as arguments
                dispatch(logon(success, user))
            })
            .catch((err) => {
                console.error(err)
// This will give us information about where the error is coming from
                dispatch(handleAuthErr("signin", err.response.status))
            })
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success
            }
        case "LOGOUT":
            return {
                ...state
            }
        case "HANDLE_AUTH_ERR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                }
            }
        case "LOGON":
            return {
                ...state,
                user: action.user,
                isAuthenticated: action.success,
                authErrCode: {
                    signup: '',
                    login: ''
                }
            }
        default:
            return state
    }
}

export default authReducer