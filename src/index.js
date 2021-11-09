import React from "react";
import store  from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state } addPost={store.addPost.bind(store)} addPostText={store.addPostText.bind(store)} addMessage={store.addMessage.bind(store)} addMessageText={store.addMessageText.bind(store)}
                >
                </App>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById("root")
    );
}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())

export default rerenderEntireTree







