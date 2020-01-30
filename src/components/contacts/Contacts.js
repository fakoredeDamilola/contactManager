import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       contacts: [
  //         {
  //           id: "1",
  //           name: "John Doe",
  //           email: "jdoe@gmail.com",
  //           phone: "08138430858"
  //         },
  //         {
  //           id: "2",
  //           name: "Karen Smith",
  //           email: "smith@gmail.com",
  //           phone: "08032300222"
  //         },
  //         {
  //           id: "3",
  //           name: "Henry Johnson",
  //           email: "henry@gmail.com",
  //           phone: "08066726115"
  //         }
  //       ]
  //     };
  //   }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>list
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
