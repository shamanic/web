import React, {Component} from 'react';

// this should be secret and only looked at by the app
class User extends Component {
    constructor(props) {
        super(props);

        // AUDRY - how protect but "re-init" on logout
        const username = props.username

        this.state = {
            // tbd
            // online, location, etc.
        }
    }
}

export default User
