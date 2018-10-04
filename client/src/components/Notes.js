import React, { Component } from 'react'

class Notes extends Component {
    render() {
        return (
            <div className = "mapped-out-cards"
                    id = { this.props.id }>
                <p>{ this.props.body }</p>
            </div>
        )
    }
}

export default Notes