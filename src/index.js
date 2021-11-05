import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state"
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state}>
            </App>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById("root")
);

