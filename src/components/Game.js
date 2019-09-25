import React, {Component} from 'react';
import yoshi from "../images/yoshi.png";

export default class Game extends Component {
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
