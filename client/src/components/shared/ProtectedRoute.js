import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = props => {
    const { isAuthenticated, redirectTo } = props
    return (
        isAuthenticated
        ?   props.render()
        :   <Redirect to = { redirectTo } />
    )
}

export default ProtectedRoute