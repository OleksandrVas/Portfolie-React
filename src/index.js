import React from "react";
import store from "./redux/redux-store"
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}>
                </App>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById("root")
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
})

export default rerenderEntireTree







