import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let nameOfUser = [
    {
        id: 0,
        name: "Oleksandr",
        birthday: "I was born in 12 October",
        position: "Urk poltava",
        job: "I'm Web Developer"
    }
]
let dialogsData = [
    {id: 1, name: "Sasha"},
    {id: 2, name: "Vlad"},
    {id: 3, name: "Igor"},
    {id: 4, name: "Pavel"}
]
let massages = [
    {id: 1, massage: "demon hello"},
    {id: 2, massage: "Vlad kak ti"},
    {id: 3, massage: "Sasha i miss you too"},
]
let postData = [
    {massage: "How are you ", id: 1, likesCount: 22 },
    {massage: "it's my first post ", id: 2, likesCount: 200} ,
    {massage: "it's my second post  ", id: 3, likesCount: 183},
]

ReactDOM.render(

    <React.StrictMode>
        <App  nameOfUser={nameOfUser} dialogsData={dialogsData} massages={massages} postData={postData}>

        </App>
    </React.StrictMode>,
    document.getElementById("root")
);

