import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        // AUDRY this seems really old school...
        // no hooks cuz is class?
        // https://reactjs.org/docs/hooks-state.html
        // make it a const Login = () => ...

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickLogin     = this.onClickLogin.bind(this);
    };

    // AUDRY - again, these seem clunky...
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
        // AUDRY null/garbage validators

        e.preventDefault();
        console.log('hey ' + this.state.username);

        // AUDRY - route to DB. if get bad response - tell user
        // if get OK, init user and route to game page
        // looks like David's route is / or /index :)
        // Need help w/ production code and Heroku
    }

    render () {
        return (
            <div className="floating">
                <h3>Login (and watch your console)</h3>
                <form onSubmit={this.onClickLogin}>
                    <label>Username: </label>
                    {/* length ok? */}
                    <input type="text"
                           maxLength="25"
                           value={this.state.username}
                           onChange={this.onChangeUsername}
                    />

                    <label>Password: </label>
                    {/* length ok? */}
                    <input type="password"
                           maxLength="60"
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
