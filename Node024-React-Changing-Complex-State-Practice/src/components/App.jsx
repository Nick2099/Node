import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const {value, name} = event.target;

    /*
    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        } 
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      };
    });
    
    can be replaced with following few lines
    */

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });

    /*
    which can be written even shorter as below

    setContact(prevValue => ({...prevValue, [name]: value}));
    */
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={updateContact} placeholder="First Name" value={contact.fName} />
        <input name="lName" onChange={updateContact} placeholder="Last Name" value={contact.lName} />
        <input name="email" onChange={updateContact} placeholder="Email" value={contact.email} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
