import React, {Component} from 'react';
import logo from "../images/logo.png";
import '../css/navbar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // tbd
        }
    }

    render() {
        return (
            <ul>
                <li><div><img src={logo} alt="Shamanic logo" />Shamanic</div></li>
                <li className="floatRight"><div>Logout</div></li>
                <li className="floatRight"><div>Username</div></li>
            </ul>
        )
    }
}
