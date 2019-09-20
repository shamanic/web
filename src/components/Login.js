import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        // AUDRY this seems really old school...
        //
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickLogin     = this.onClickLogin.bind(this);
    };

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onClickLogin(e) {
        e.preventDefault();
        console.log('hey ' + this.state.username);
    }


    // AUDRY null/garbage validatiors
    // limit input string 25 char or whtvs

    render () {
        return (
            <div className="floating">
                <form onSubmit={this.onClickLogin}>
                    <label>Username: </label>
                    <input type="text"
                           value={this.state.username}
                           onChange={this.onChangeUsername}
                    />
                    <label>Password: </label>
                    <input type="text"
                           value={this.state.password}
                           onChange={this.onChangePassword}
                    />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login;
