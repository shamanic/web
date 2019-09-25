import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
// import User from './components/User';
// import Game from './components/Game';
// import logo from './images/logo.png'

export default class App extends Component {
    // AUDRY - wrap in router
    render() {
        return (
            <div>
                <NavBar />
                <Login />
            </div>
        );
    }
}
