import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        // username only be set once, after DB login returns OK
        // aka stateless
        //const username = props.username;

        // AUDRY - no hooks cuz is class?
        // https://reactjs.org/docs/hooks-state.html
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
