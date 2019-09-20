import React, {Component} from 'react';
import Login from './components/Login';
import logo from './images/logo.png'

class App extends Component {
    // AUDRY - wrap in router
    render() {
        return (
            <div>
                <div>
                    <h1>Shamanic!</h1>
                    <img src={logo} alt="Shamanic logo"/>
                </div>
                <Login />
            </div>
        );
    }
}

export default App;
