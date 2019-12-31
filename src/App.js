import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  console.log("props from inside of App.js");
  console.log({ user: props.user.toJS() });
  const user = props.user.toJS();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Hello ${user.first_name}. Your email is ${user.email}`}</p>
      </header>
    </div>
  );
}

export default App;
