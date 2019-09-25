import React, {Component} from 'react';

// this should be secret and only looked at by the app
export default class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username // AUDRY find way to make this immutable
            // tbd
            // online, location, etc.
        }
    }
}
