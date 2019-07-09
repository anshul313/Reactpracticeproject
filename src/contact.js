import React from "react";
import FORM from "./FORM";

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="name" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
        <FORM></FORM>
      </form>
    );
  }
}

export default Contact;