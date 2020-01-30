import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  //     static propTypes = {
  //     name:PropTypes.string.isRequired,
  //     email:PropTypes.string.isRequired,
  //     phone:PropTypes.string.isRequired
  // }
  state = {
    showContactInfo: false
  };

  //note when you use the former function, you have to bind a this i.e onClick={this.onShowClick.bind(this)}
  //   onShowClick() {
  //     console.log(this.state);
  //   }

  //but when you have a arrow function, you dont need that cause bind has a lexical this
  //to pass a value to the onShowClick, you have to use bind no matter what e.g this.onShowClick.bind(this, name)
  //   onShowClick = (name, e) => {
  //     console.log(name);
  //   };

  // onShowClick = () => {
  //   this.setState({
  //     showContactInfo:!this.state.showContactInfo
  //   })
  // };
  //for arrw function the async is before the parameters
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    // dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { contact } = this.props;
    const { name, email, phone, id } = contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  style={{ cursor: "pointer" }}
                >
                  S
                </i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  X
                </i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "16px"
                    }}
                  >
                    i
                  </i>
                </Link>
                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                ) : null}
              </h4>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
