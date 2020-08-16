import React from 'react';
import {Link} from 'react-router-dom';

export default class StartPage extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        <Link to="/pokemon/0/">
                            <h3><span className="badge badge-danger">Open Pokedex</span></h3>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
