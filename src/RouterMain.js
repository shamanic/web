import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Game from "./components/Game";
import CreateUser from "./components/CreateUser";

class RouterMain extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Switch>
                    {/* AUDRY - make Game the landing page - but route to Login if not authed */}
                    <Route exact path="/" component={Login}/>
                    <Route path="/Game" component={Game}/>
                    <Route path="/CreateUser" component={CreateUser}/>
                </Switch>
            </>
        )
    }
}

export default RouterMain
