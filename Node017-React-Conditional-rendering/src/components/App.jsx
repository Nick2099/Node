import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  // instead of next line and calling a function renderConditionally
  // return <div className="container">{renderConditionally()}</div>
  // we can just write a Ternary Operator that includes all the logic from function renderConditionally
  return <div className="container">{
    isLoggedIn ? <h1>Hello</h1> : <Login />
    // it can be written also with && operator - see the Notes
  }</div>
}

export default App;
