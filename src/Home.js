import React, {
	Component
}
from 'react';
import './home.css';
import {
	Redirect
}
from 'react-router-dom';
import Card from "./card";
import {
	Navbar, Nav, NavDropdown, FormControl, Form, Button
}
from 'react-bootstrap';
import {
	slide as Menu
}
from 'react-burger-menu';



class Home extends Component {

	constructor(props) {
		super(props);
		let loggedIn = true;
		const token = localStorage.getItem("token");

		if (token == null) {
			loggedIn = false;
		}
		this.state = {
			loggedIn,
			token
		}
		console.log('storagetoken', this.state.token);
		console.log(this.state.people);

	}
	render() {
		if (this.state.token == null) {
			return <Redirect to='/'  />

		}
		let people = [{
			title: "first title",
			imgsrc: "https://images.pexels.com/photos/236048/pexels-photo-236048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "first subtitle",
			text: "my first text"
		}, {
			title: "second title",
			imgsrc: "https://images.pexels.com/photos/236048/pexels-photo-236048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "second subtitle",
			text: "my second text"
		}, {
			title: "third title",
			imgsrc: "https://images.pexels.com/photos/236048/pexels-photo-236048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "third subtitle",
			text: "my third text"
		}, {
			title: "four title",
			imgsrc: "https://images.pexels.com/photos/236050/pexels-photo-236050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "four subtitle",
			text: "my four text"
		}, {
			title: "five title",
			imgsrc: "https://images.pexels.com/photos/236051/pexels-photo-236051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "five subtitle",
			text: "my five text"
		}, {
			title: "six title",
			imgsrc: "https://images.pexels.com/photos/236045/pexels-photo-236045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "six subtitle",
			text: "my six text"
		}, {
			title: "seven title",
			imgsrc: "https://images.pexels.com/photos/236053/pexels-photo-236053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "seven subtitle",
			text: "my seven text"
		}, {
			title: "eight title",
			imgsrc: "https://images.pexels.com/photos/236054/pexels-photo-236054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			subtitle: "eight subtitle",
			text: "my eight text"
		}]

		return (
			<div>
			<div>
			<Menu>
      <a className="menu-item" href="/Home">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Laravel
      </a>

      <a className="menu-item" href="/angular">
        Angular
      </a>

      <a className="menu-item" href="/react">
        React
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
    </div>
		 <Navbar bg="primary" variant="dark">
		    <Navbar.Brand href="/Home">Home</Navbar.Brand>
		    <Nav className="mr-auto">
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="outline-light">Search</Button>
		    </Form>
		  </Navbar>
            <h2>welcome to home page</h2>
              <tr>
	                {people.slice(0,4).map(function(person, index){
	                    return<td> <Card person={person}>{person}</Card></td>
	                  })}

              </tr>
               <tr>
	                {people.slice(4,8).map(function(person, index){
	                    return<td> <Card person={person}>{person}</Card></td>
	                  })}

              </tr>

              </div>



		);
	}
}


export default Home;