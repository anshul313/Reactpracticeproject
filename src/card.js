import React, {
	Component
}
from 'react';
import './home.css';
import {
	Redirect
}
from 'react-router-dom';
import {
	Navbar, Nav, NavDropdown, FormControl, Form, Button, Card
}
from 'react-bootstrap';


class card extends Component {

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

	}
	render() {
		if (this.state.token == null) {
			return <Redirect to='/'  />
		}
		return (

			<div class="card">
                <Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={this.props.person.imgsrc} />
				  <Card.Body>
		<Card.Title>{this.props.person.title}</Card.Title>
				    <Card.Subtitle>{this.props.person.subtitle}</Card.Subtitle>
				    <Card.Text>
				     {this.props.person.text}
				    </Card.Text>
				  </Card.Body>
				</Card>
				</div>
		);
	}
}


export default card;