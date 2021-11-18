import React from "react";
import store from "./redux/redux-store"
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store} >
                    <App state={state} store={store}></App>
                </StoreContext.Provider>

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







