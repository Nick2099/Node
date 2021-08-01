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
    setItems(prevItems => {
      return [...prevItems, {no: ("ToDoItem-"+tmpItem.toString()), text: inputText}];
    });
    setInputText("");
    setTmpItem(tmpItem + 1);
    document.getElementById("inputText").focus();
  }

  function printOutItems() {
    console.log(items);
  }

  function deleteItem(id) {
    console.log("Delete item with id = ", id);
    setItems(prevItems => {
      return prevItems.filter((item) => {
        return item.no !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input id="inputText" onChange={handleChange} type="text" value={inputText} />
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
            <ToDoItem key={todoItem.no} id={todoItem.no} text={todoItem.text+" (id="+todoItem.no+")     "} onDelete={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
