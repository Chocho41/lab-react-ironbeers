import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';
import Singlebeer from '../Pages/SingleBeer';

export default class ListBeers extends Component {
   constructor(props) {
    super(props) ;

    this.state = {
        beers: [],
    };
   }
   
   componentDidMount() {
       axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response.data.results);

            this.setState({
                beers: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
   }

    render() {
        return (
            <div>
                <h1>List Beers Page</h1>
                <div className="container-beers-flex">
                    <div>
                        {this.state.beers.map((beer) => {
                            return(
                                <div>
                                    <Link to={`/beers/${beer._id}`} >
                                        <li>{beer.name}</li>
                                    </Link>
                                    <img src={beer.image_url}  alt={beer.name}/>
                                    <p>{beer.tagline}</p>
                                    <p>{beer.contributed_by}</p>
                                </div>
                            )
                        })}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

