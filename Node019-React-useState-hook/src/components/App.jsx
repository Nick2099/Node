import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function setTo0() {
    setCount(0);
  }

  function change() {
    setCount(-count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <button onClick={setTo0}>0</button>
      <button onClick={change}>+-</button>
    </div>
  );
}

export default App;
