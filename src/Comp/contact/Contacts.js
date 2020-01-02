import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../contact/Context";
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2" align="center">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
              ;{""}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
