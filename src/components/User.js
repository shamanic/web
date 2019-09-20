import React, {Component} from 'react';

// this should be secret and only looked at by the app
// i think this may be a good candidate for a const hook thing
class User extends Component {
    constructor(props) {
        super(props);

        // username only be set once, after DB login returns OK
        // aka stateless
        //const username = props.username;

        this.state = {
            // tbd
            // online, location, etc.
        }
    }

    render() {
        return <div>Hey Audry, you've got the user obj! Username is: {this.props.username}</div>
    }
}

export default User;
