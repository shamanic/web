import React, {Component} from 'react';
import logo from "../images/logo.png";

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClickLogin  = this.handleClickLogin.bind(this);
    }

    handleInputChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }

    handleClickLogin(event) {
        // AUDRY null/garbage validators

        event.preventDefault();
        alert('hey ' + this.state.username + ', I know your secret: ' + this.state.password);

        // AUDRY - route to DB. if get bad response - tell user
        // if get OK, init user and route to game page
    }

    render () {
        return (
            <div className="floating">
                <img src={logo} alt="Shamanic logo"/>

                <form onSubmit={this.handleClickLogin}>
                    <label>Username: </label>
                    {/* DAVID: username length? */}
                    <input name="username"
                           type="text"
                           maxLength="25"
                           value={this.state.username}
                           onChange={this.handleInputChange}
                    />

                    <label>Password: </label>
                    {/* DAVID: password length? */}
                    <input name="password"
                           type="password"
                           maxLength="60"
                           value={this.state.password}
                           onChange={this.handleInputChange}
                    />

                    <input name="login"
                           type="submit"
                           value="Login" />
                </form>
            </div>
        )
    }
}

export default Login
