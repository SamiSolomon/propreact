import React from "react";
import Card from "./components/Card";
import contacts from "./components/contacts";



function App(){
    return (
    <div>
        <h1 className="heading">My Contacts</h1>
        <Card 
       name={contacts[0].name}
       img= {contacts[0].imgURL}
       email={contacts[0].email}
       tel={contacts[0].tel}
        />
        <Card 
          name={contacts[1].name}
          img= {contacts[1].imgURL}
          email={contacts[1].email}
          tel={contacts[1].tel}
        />
        <Card 
          name={contacts[2].name}
          img= {contacts[2].imgURL}
          email={contacts[2].email}
          tel={contacts[2].tel}
        />
        <Card 
          name={contacts[3].name}
          img= {contacts[3].imgURL}
          email={contacts[3].email}
          tel={contacts[3].tel}
        />
    </div>
    );
}

export default App;