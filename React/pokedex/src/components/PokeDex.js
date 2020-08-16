import Pokelist from './PokeList';
import React from 'react';

export default class Pokedex extends React.Component{
    render(){
        return (
            <div>
                <div className='container'>
                    <Pokelist offset={this.props.match.params.offset} />
                </div>
            </div>
        );
    }
}

