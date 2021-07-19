import React from "react";

function App() {

  const [name, setName] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");
  const [nameLenght, setNameLenght] = React.useState(0);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeadingText(name);
    setNameLenght(name.length);
    console.log(name, name.length);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input 
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name} />
      <button onClick={handleClick}>Submit</button>
      <p>Lenght: {nameLenght}</p>
    </div>
  );
}

export default App;
