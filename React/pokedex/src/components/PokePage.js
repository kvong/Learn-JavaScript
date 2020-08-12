import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import capitalizeName from './format';

const TYPE_COLORS = {
    normal :'A8A77A',
    fire : 'EE8130',
    water : '6390F0',
    electric : 'F7D02C',
    grass : '7AC74C',
    ice : '96D9D6',
    fighting : 'C22E28',
    poison : 'A33EA1',
    ground : 'E2BF65',
    flying : 'A98FF3',
    psychic : 'F95587',
    bug : 'A6B91A',
    rock : 'B6A136',
    ghost : '735797',
    dragon : '6F35FC',
    dark : '705746',
    steel : 'B7B7CE',
    fairy : 'D685AD'
};

export default class Pokepage extends React.Component{
    state = {
        name: '',
        pokeIndex: '',
        prevIndex: '',
        nextIndex: '',
        imageUrl: '',
        types: [],
        description: '',
        stats: {
            hp: '',
            atk: '',
            def: '',
            spAtk: '',
            spDef: '',
            speed: '',
        },
        abilities: [],
    }

    nextPokemon(){
        this.setState({pokeIndex: this.nextPokeIndex});
    }

    prevPokemon(){
        this.setState({pokeIndex: this.prevPokeIndex});
    }

    async componentDidMount(){
        const pokeIndex = this.props.match.params.pokeIndex; 
        const pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeIndex + '/';
        const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokeIndex + '/';
        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokeIndex + ".png"

        const res = await axios.get(pokeUrl);
        const name = capitalizeName(res.data.name);
        const types = res.data.types;
        console.log(types);
        let [hp, atk, def, spAtk, spDef, speed ] = '';
        res.data.stats.map((stat) => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat.base_stat;
                    break;
                case 'attack':
                    atk = stat.base_stat;
                    break;
                case 'defense':
                    def = stat.base_stat;
                    break;
                case 'special-attack':
                    spAtk = stat.base_stat;
                    break;
                case 'special-defense':
                    spDef = stat.base_stat;
                    break;
                case 'speed':
                    speed = stat.base_stat;
                    break;
            }
        });

        const abilities = res.data.abilities;
        
        let prevIndex = parseInt(pokeIndex) - 1
        prevIndex = prevIndex.toString();
        let nextIndex = parseInt(pokeIndex) + 1
        nextIndex = nextIndex.toString();

        this.setState({
            name: name,
            pokeIndex: pokeIndex,
            nextIndex: nextIndex,
            imageUrl: imageUrl,
            types: types,
            stats: {
                hp: hp,
                atk: atk,
                def: def,
                spAtk: spAtk,
                spDef: spDef,
                speed: speed,
            },
            abilities: abilities,
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="py-lg-5 px-5 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h2>{this.state.name}</h2>
                        <img src={this.state.imageUrl} alt= {this.state.name} width="150em" height="150em"></img>
                    </div>  
                    <div className="py-lg-5 px-5 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h3>Type: </h3>
                        <ul>
                            {this.state.types.map(type => {
                                return <li className="badge badge-pill px-3 mr-1" key={type.type.name} style={{backgroundColor: `#${TYPE_COLORS[type.type.name]}`}}>{capitalizeName(type.type.name)}</li>
                            })}
                        </ul>
                    </div>  
                    <div className="py-lg-5 px-5 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h3>Ability: </h3>
                        <ul>
                        {this.state.abilities.map(ability => {
                            return <li key={ability.ability.name}>{capitalizeName(ability.ability['name'])}</li>
                        })}
                        </ul>
                    </div>  
                    <div className="py-lg-5 px-5 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h3>Stats: </h3>
                        <ul>
                            <li> HP:    {this.state.stats.hp} </li>
                            <li> Attack:  {this.state.stats.atk} </li>
                            <li> Defense:  {this.state.stats.def} </li>
                            <li> Special Attack:  {this.state.stats.spAtk} </li>
                            <li> Special Defense: {this.state.stats.spDef} </li>
                            <li> Speed: {this.state.stats.speed} </li>
                        </ul>
                    </div>  
                </div>
                <Link to='/'>
                    <button>Back to PokeDex</button>
                </Link>
            </div>
        );
    }
}
