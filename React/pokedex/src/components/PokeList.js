import React from 'react';
import axios from 'axios';
import Pokecard from './PokeCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const POKEMON_COUNT = 894;

export default class Pokelist extends React.Component{
    state = {
        pokemon: null,
        prev: null,
        next: null,
        offset: '0',
    };

    async updatePokelist(newUrl){
        const res = await axios.get(newUrl);
        const offset = this.getOffset(newUrl);
        this.setState({pokemon: res.data["results"], prev: res.data["previous"], next: res.data["next"], offset: offset});
    }

    getOffset = (urlStr) => {
        const url = new URL(urlStr);
        const offset = url.searchParams.get("offset");
        return offset;
    }

    prevPage = () => {
        this.updatePokelist(this.state.prev);
    }

    nextPage = () => {
        this.updatePokelist(this.state.next);
    }

    async componentDidMount(){
        let offset  = this.props.offset;
        console.log("PokeList: offset = " + (Math.floor(parseInt(offset) / 24) * 24));
        const url = "https://pokeapi.co/api/v2/pokemon/?offset=" + (Math.floor(parseInt(offset) / 24) * 24) + "&limit=24";
        const res = await axios.get(url);
        const pokemon = res.data["results"];
        const prev = res.data["previous"];
        const next = res.data["next"];
        this.setState({pokemon: pokemon, prev: prev, next: next, offset: offset});
    }

    render(){
        return (
            (this.state.pokemon ? 
            <div>
                <div className='row'>
                        {this.state.pokemon.map((pokemon) => {
                            let urlSplit = pokemon.url.split('/');
                            let pokeIndex = parseInt(urlSplit[urlSplit.length - 2]);

                            if (pokeIndex > POKEMON_COUNT) {
                                return;
                            }
                            else{
                                return (
                                    <Pokecard key={pokemon.name} 
                                        name={pokemon.name} 
                                        url={pokemon.url}
                                        offset={this.state.offset}
                                    />);
                            }
                        })}
                </div>
                {this.state.prev ?  <button className='bg-danger text-white px-3' onClick={this.prevPage}>Prev</button> : <div></div>}
                {this.state.next ?  <button className='bg-danger text-white px-3' onClick={this.nextPage}>Next</button> : <div></div>}
            </div>
            : (<div>Loading Pokemon</div>))
        );
    }
}
