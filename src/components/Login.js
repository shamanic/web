import React, {Component} from 'react';
import logo from "../images/logo.png";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            newPassword: '',
            isRegistered: true
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onClickLogin     = this.onClickLogin.bind(this);
    };

    handleInputChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }

    onClickLogin(event) {
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

                <form onSubmit={this.onClickLogin}>
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

                    {/* i'm going to move the hide/show and put stuff into components */}
                    <div style={{ display: (this.state.isRegistered ? 'none' : 'block' )}}>
                        <label>Match Password: </label>
                        <input name="newPassword"
                               type="password"
                               maxLength="60"
                               value={this.state.newPassword}
                               onChange={this.handleInputChange}
                        />
                    </div>

                    <input name="login"
                           style={{ display: (this.state.isRegistered ? 'block' : 'none' )}}
                           type="submit"
                           value="Login" />

                    <input name="register"
                           style={{ display: (this.state.isRegistered ? 'none' : 'block' )}}
                           type="submit"
                           value="Register" />
                </form>


                <a onClick={() => this.setState({ isRegistered: !this.state.isRegistered })}>
                    { this.state.isRegistered ? "New User?" : "Nevermind" }
                </a>
            </div>
        )
    }
}
