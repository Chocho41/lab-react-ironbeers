import React, { Component } from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home page</h1>
            <div className="homepage-section">
                <img src='./../assets/beers.png' />
                <Link to="/beers" className="homepage-link">
                    All Beers
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam soluta earum debitis nam enim assumenda laborum, mollitia voluptas placeat voluptatibus sed, aliquam veritatis magni iure eum fugit, omnis similique.</p>
            </div>
            <div className="homepage-section">
                <img src='./../assets/random-beer.png' />
                <Link to="/random-beer" className="homepage-link">
                    Random Beer
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam soluta earum debitis nam enim assumenda laborum, mollitia voluptas placeat voluptatibus sed, aliquam veritatis magni iure eum fugit, omnis similique.</p>
            </div>
            <div className="homepage-section">
                <img src='./../assets/new-beer.png' />
                <Link to="/new-beer" className="homepage-link">
                    New Beer
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam soluta earum debitis nam enim assumenda laborum, mollitia voluptas placeat voluptatibus sed, aliquam veritatis magni iure eum fugit, omnis similique.</p>
            </div>
        </div>
    )
}

export default Home
