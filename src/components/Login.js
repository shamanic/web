import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeUsername = e => {
        this.setState({ username: e.target.value })
    }

    handleChangePassword = e => {
        this.setState({ password: e.target.value })
    }

    handleClickLogin = e => {
        // AUDRY null/garbage validators

        e.preventDefault();
        console.log('hey ' + this.state.username + '. yr secret: ' + this.state.password);

        // AUDRY - route to DB. if get bad response - tell user
        // if get OK, init user and route to game page
        // looks like David's route is / or /index :)
        // Need help w/ production / Heroku
    }

    render () {
        return (
            <div className="floating">
                <h3>Login (and watch your console)</h3>
                {/* de-form (ha ha) this? what is pro/con? */}
                <form onSubmit={this.handleClickLogin}>
                    <label>Username: </label>
                    {/* DAVID: what username length did you set in DB? */}
                    <input type="text"
                           maxLength="25"
                           value={this.state.username}
                           onChange={this.handleChangeUsername}
                    />

                    <label>Password: </label>
                    {/* DAVID: what password length did you set in DB? */}
                    <input type="password"
                           maxLength="60"
                           value={this.state.password}
                           onChange={this.handleChangePassword}
                    />
                    <input type="submit" value="Login" />
                </form>
                <button>Create New Account</button>
            </div>
        )
    }
}
