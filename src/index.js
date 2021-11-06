import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from "./redux/state"
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

console.log(addPost)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost}
            >
            </App>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById("root")
);

