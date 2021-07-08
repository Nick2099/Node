import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [tmpTime, setTime] = React.useState(time);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(getTime, 200);

  return (
    <div className="container">
      <h1>{tmpTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
