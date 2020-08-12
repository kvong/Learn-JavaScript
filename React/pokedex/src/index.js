import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import './index.css'
import Pokedex from './components/PokeDex';
import Pokepage from './components/PokePage';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Pokedex}/>
                    <Route exact path="/pokemon/:pokeIndex" component={Pokepage}/>
                </Switch>
            </Router>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
