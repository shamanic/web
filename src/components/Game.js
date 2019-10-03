import React, {Component} from 'react';
import yoshi from "../images/yoshi.png";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // tbd
        }
    }

    render() {
        return <img src={yoshi} alt="yoshi"/>
    }
}

export default Game
