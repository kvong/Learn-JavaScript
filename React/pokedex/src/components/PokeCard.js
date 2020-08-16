import React from 'react';
import {Link} from 'react-router-dom';
import capitalizeName from './format';


export default class Pokecard extends React.Component{
    state = {
        name: '',
        imageUrl: '',
        pokeIndex: '',
        offset: '',
    };

    async componentDidMount(){
        const { name, url, offset } = this.props;
        const capName = capitalizeName(name);
        const urlSplit = url.split('/');
        const pokeIndex = urlSplit[urlSplit.length - 2]
        console.log(url);
        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/" + pokeIndex + ".png"
        console.log(pokeIndex);
        this.setState({name: capName, imageUrl: imageUrl, pokeIndex: pokeIndex, offset: offset})
    };

    render(){
        return (
            <div className='col-lg-2 col-md-3 col-sm-6 border bg-light p-4'>
                <Link to={`/pokemon/${this.state.offset}/${this.state.pokeIndex}`}>
                    <img src={this.state.imageUrl} alt= {this.state.name} width="125em" height="125em"></img>
                    <br />
                    <b >{this.state.name}</b>
                </Link>
            </div>
        );
    }
}

