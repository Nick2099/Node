import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [tmpItem, setTmpItem] = useState(0);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    console.log("ulaz:", tmpItem);
    setItems(prevItems => {
      return [...prevItems, {no: tmpItem.toString(), text: inputText}];
    });
    setInputText("");
    setTmpItem(tmpItem + 1);
  }

  function printOutItems() {
    console.log(items);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <button onClick={printOutItems}>Print out items to console</button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <ToDoItem key={todoItem.no} text={todoItem.text+" "+todoItem.no} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
