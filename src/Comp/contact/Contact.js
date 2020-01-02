import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDelete = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DEL_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DEL_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      <i className="far fa-address-card"></i>
                      {name}{" "}
                      <i
                        onClick={() => {
                          this.setState({
                            showContactInfo: !this.state.showContactInfo
                          });
                        }}
                        className="fas fa-chevron-down"
                        style={{ cursor: "pointer", color: "blue" }}
                      />
                      <i
                        className="far fa-trash-alt"
                        style={{
                          cursor: "pointer",
                          color: "red",
                          float: "right"
                        }}
                        onClick={this.onDelete.bind(this, id, dispatch)}
                      />
                      <Link to={`/contact/edit/${id}`}>
                        <i
                          className="fas fa-user-edit"
                          style={{
                            cursor: "pointer",
                            color: "grey",
                            float: "right"
                          }}
                        />
                      </Link>
                    </h3>
                    {showContactInfo ? (
                      <ul className="list-group ">
                        <li className="list-group-item">email: {email}</li>
                        <li className="list-group-item">phone: {phone}</li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
              <br />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;
Contact.protoTypes = {
  contact: PropTypes.object.isRequired
};
