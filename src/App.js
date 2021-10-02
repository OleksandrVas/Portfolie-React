import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
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
