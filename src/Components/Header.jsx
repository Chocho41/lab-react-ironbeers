import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>This is the header</h1>
                <i className="fas fa-home"></i>
                <Link to="/" className="homepage-link">
                    Home
                </Link>
            </div>
        )
    }
}
