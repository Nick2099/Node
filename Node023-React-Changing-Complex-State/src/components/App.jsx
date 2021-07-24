import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function updateFullName(event) {
    const {value, name} = event.target;

    // if we want to use some component from event, like .target.name, we should define it as a constant and then use it
    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      };
    });
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={updateFullName} placeholder="First Name" value={fullName.fName}/>
        <input name="lName" onChange={updateFullName} placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
