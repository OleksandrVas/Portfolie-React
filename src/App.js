import React from "react";
import "./App.css";
import Profile from "../src/Components/Profile/Profile";
import Header from "../src/Components/Header/Header"
import Nav from "../src/Components/NavBar/Nav"
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};
export default App;
