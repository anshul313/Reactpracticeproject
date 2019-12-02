import React from "react";
import {
  Link
}
from "react-router-dom";

/*const User = ({
  match
}) => <p>{match.params.id}</p>; */

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "ANSHUL",
      lASTname: "SHARMA",
      Mobile: "9992181918"
    }
  }

  componentDidMount() {
    fetch("http://localhost:8090/api/getusers")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("in result");
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const {
      error, isLoaded, items
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
      <ul>
      
          {items.map(item => (

            <li key={item.name}>
              {item.name}  {item.email}
            </li>
          ))}
        </ul>
            <h1>Users</h1>
          <strong>select a user</strong>
          <ul>
            <li>
              <Link to="/users/1">User 1 </Link>
            </li>
            <li>
              <Link to="/users/2">User 2 </Link>
            </li>
            <li>
              <Link to="/users/3">User 3 </Link>
            </li>
          </ul>
          
        </div>
      );
    }
  }
}

export default Users;