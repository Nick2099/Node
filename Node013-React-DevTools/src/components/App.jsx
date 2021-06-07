import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return <Card 
    key={contact.id} /* it have to be created like this and it's expected by React */
    id={contact.id} /* so, if we need this information we can create another property */
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}    
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQHtmMum5pt9UA/profile-displayphoto-shrink_200_200/0/1546863149926?e=1627516800&v=beta&t=YJ5t21a3O5q65VhoBz9ZfHFGPHEZOOFszZnweL61IZU" />
      {contacts.map(createCard)}

      {/*the line above is replacing all the line below  */}

      <h1 className="heading">Made without using map</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
