import React from "react";
import store from "./redux/redux-store"
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider  store={store}>
                    <App state={state} store={store}></App>
                </Provider>


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







