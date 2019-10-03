import React, {Component} from 'react';
import logo from "../images/logo.png";
import '../css/navbar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // tbd
        }
    }

    render() {
        // AUDRY - get rid of the divs. <nav>?
        return (
            <ul>
                <li><div><img src={logo} alt="Shamanic logo" />Shamanic</div></li>
                <li className="floatRight"><div>Logout</div></li>
                <li className="floatRight"><div>User</div></li>
                <li className="floatRight"><div>Game</div></li>
            </ul>
        )
    }
}

export default NavBar
