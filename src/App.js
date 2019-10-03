import React, {Component} from 'react';
import RouterMain from "./RouterMain";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    // AUDRY - wrap in router
    render() {
        return (
            <>
                <BrowserRouter>
                    <RouterMain/>
                </BrowserRouter>
            </>
        )
    }
}

export default App
