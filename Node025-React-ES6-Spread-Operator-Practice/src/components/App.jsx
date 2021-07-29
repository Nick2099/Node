import React, { useState} from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleNewItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
    document.getElementById("inputText").focus();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input id="inputText" onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>
          })} 
        </ul>
      </div>
    </div>
  );
}

export default App;
