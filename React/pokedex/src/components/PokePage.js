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
        prevIndex: null,
        nextIndex: null,
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
        offset: '',
    }

    nextPokemon = () => {
        this.updatePokePage(this.state.nextIndex);
    }

    prevPokemon = () => {
        this.updatePokePage(this.state.prevIndex);
    }

    async updatePokePage(index){
        const pokeIndex = index;
        console.log('PokePage: index = ' + index);
        let offset = 0;
        if (parseInt(index) % 24 == 0) {
            offset = Math.floor((parseInt(pokeIndex) - 1)/24) * 24; 
        }
        else{
            offset = Math.floor(parseInt(pokeIndex)/24) * 24; 
        }
        console.log('PokePage: offset = ' + offset);
        offset = offset.toString();
        const pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeIndex + '/';
        const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokeIndex + '/';
        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokeIndex + ".png";
        const res = await axios.get(pokeUrl);
        const name = capitalizeName(res.data.name);
        const types = res.data.types;
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
        if (prevIndex < 1) {
            prevIndex = null;
        }
        else{
            prevIndex = prevIndex.toString();
        }
        
        const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        let nextIndex = parseInt(pokeIndex) + 1
        if (nextIndex > parseInt(pokemon.data.count)){
            nextIndex = null;
        }
        else{
            nextIndex = nextIndex.toString();
        }

        this.setState({
            name: name,
            pokeIndex: pokeIndex,
            prevIndex: prevIndex,
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
            offset: offset,
        });
    }

    async componentDidMount(){
        const pokeIndex = this.props.match.params.pokeIndex; 
        const offset = this.props.match.params.offset; 
        const pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeIndex + '/';
        const speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/" + pokeIndex + '/';
        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokeIndex + ".png"

        const res = await axios.get(pokeUrl);
        const name = capitalizeName(res.data.name);
        const types = res.data.types;
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
        if (prevIndex < 1) {
            prevIndex = null;
        }
        else{
            prevIndex = prevIndex.toString();
        }
        
        const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        let nextIndex = parseInt(pokeIndex) + 1
        if (nextIndex > parseInt(pokemon.data.count)){
            nextIndex = null;
        }
        else{
            nextIndex = nextIndex.toString();
        }
        this.setState({
            name: name,
            pokeIndex: pokeIndex,
            prevIndex: prevIndex,
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
            offset: offset,
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="py-lg-5 px-4 py-3 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h2>{this.state.name}</h2>
                        <img src={this.state.imageUrl} alt= {this.state.name} width="150em" height="150em"></img>
                    </div>  
                    <div className="py-lg-5 p-3 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h4>Type: </h4>
                        <ul>
                            {this.state.types.map(type => {
                                return <li className="badge badge-pill px-3 m-1" key={type.type.name} style={{backgroundColor: `#${TYPE_COLORS[type.type.name]}`, fontSize: 14}}>{capitalizeName(type.type.name)}</li>
                            })}
                        </ul>
                    </div>  
                    <div className="py-lg-5 p-3 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h4>Ability: </h4>
                        <ul>
                        {this.state.abilities.map(ability => {
                            return <li key={ability.ability.name}>{capitalizeName(ability.ability['name'])}</li>
                        })}
                        </ul>
                    </div>  
                    <div className="py-lg-5 p-3 col-lg-3 col-md-6 col-sm-9 border bg-light ">
                        <h4>Base Stats: </h4>
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
                <Link to={{
                    pathname: `/pokemon/${this.state.offset}/`,
                        aboutProps: {
                            offset: `${this.state.offset}`,
                        }
                }}>
                    <button>Back to PokeDex</button>
                </Link>
                { this.state.prevIndex ?
                    <Link to={{
                        pathname: `/pokemon/${this.state.offset}/${this.state.prevIndex}/`,
                    }}>
                        <button onClick={this.prevPokemon}>Prev</button>
                    </Link> : <span></span>
                }
                { this.state.nextIndex ?
                    <Link to={{
                        pathname: `/pokemon/${this.state.offset}/${this.state.nextIndex}/`,
                    }}>
                        <button onClick={this.nextPokemon}>Next</button>
                    </Link> : <span></span>
                }
            </div>
        );
    }
}
