import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="default-container">
                <h1>404</h1>
                <h1>Error</h1>
                <h2>Page Not Found</h2>
                <h3>The Requested URL<span className="url-class">{this.props.location.pathname}</span>
                {" "}
                was not found
                </h3>
            </div>
        )
    }
}
