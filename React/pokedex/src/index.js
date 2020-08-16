import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './index.css'
import Pokedex from './components/PokeDex';
import Pokepage from './components/PokePage';
import StartPage from './components/StartPage';

class App extends React.Component{
    render(){
        return (
            <div>
                <Router>
                <nav className='navbar  bg-danger'>
                    <Link to='/'>
                        <h3 className='text-white' >PokeDex</h3>
                    </Link>
                </nav>
                    <Switch>
                        <Route exact path="/" component={StartPage} />
                        <Route exact path="/pokemon/:offset/" component={Pokedex}/>
                        <Route exact path="/pokemon/:offset/:pokeIndex/" component={Pokepage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
