
import axios from 'axios';
import React, { Component } from 'react'

export default class SingleBeer extends Component {
    
    state = {
        beer: null,
    }

    componentDidMount() {
        console.log(this.props.match.params.theBeerId)
        const id = this.props.match.params.theBeerId;
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers" + this.props.match.params.theBeerId)
        .then((response) => {
          this.setState({
            beer: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    render() {

        if (!this.state.beer) {
            return <div>Loading...</div>;
          }

        return (
            <div>
                <h1>Single beer page</h1>
                <h3>Beer name {this.state.beer && this.state.beer.name}</h3>
                {this.state.beer && (
                    <img src={this.state.beer.image_url}  alt={this.state.beer.name}/>
                )}
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }
}
