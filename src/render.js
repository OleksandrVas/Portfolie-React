import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, addPostText} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} addPostText={addPostText}
                >
                </App>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById("root")
    );
}


export default rerenderEntireTree

