import React from 'react';
import axios from 'axios';
import Pokecard from './PokeCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Pokelist extends React.Component{
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/?limit=36",
        pokemon: null,
        prev: null,
        next: null
    };

    async updatePokelist(newUrl){
        const res = await axios.get(newUrl);
        this.setState({pokemon: res.data["results"], prev: res.data["previous"], next: res.data["next"]});
        console.log(res.data["previous"]);
        console.log(res.data["next"]);
    }

    prevPage = () => {
        this.updatePokelist(this.state.prev);
    }

    nextPage = () => {
        this.updatePokelist(this.state.next);
    }

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data["results"], prev: res.data["previous"], next: res.data["next"]});
    }

    render(){
        return (
            (this.state.pokemon ? 
            <div>
                <div className='row'>
                        {this.state.pokemon.map((pokemon) => {
                            return (
                                <Pokecard key={pokemon.name} 
                                    name={pokemon.name} 
                                    url={pokemon.url}
                                />);
                        })}
                </div>
                {this.state.prev ?  <button onClick={this.prevPage}>Prev</button> : <div></div>}
                {this.state.next ?  <button onClick={this.nextPage}>Next</button> : <div></div>}
            </div>
            : (<div>Loading Pokemon</div>))
        );
    }
}
