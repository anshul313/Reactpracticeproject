import React from "react";
import {
  Row, Form, Col, Button
}
from 'react-bootstrap';
import {
  Navbar, Nav, NavDropdown
}
from 'react-bootstrap';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: '',
      email: '',
      password: '',
      dob: '',
      mobilenumber: '',
      country: '',
    }
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onFormSubmit(this.state);
    this.setState(this.initialState);
  }


  onFormSubmit(data) {
    console.log("onFormSubmit function called");
    console.log(data);
    const apiUrl = 'http://localhost:8090/api/users';

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddProduct: false
        })
      }, (error) => {
        this.setState({
          error
        });
      })
  }


  render() {
    return (
      <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">SIGNUP & LOGIN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/contact">create new account</Nav.Link>
      <Nav.Link href="/">login here</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <h2>Enter user details</h2>
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="name"/>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="password" />
              </Form.Group>
              <Form.Group controlId="dob">
                <Form.Label>dob</Form.Label>
                <Form.Control
                  type="text"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                  placeholder="dob" />
              </Form.Group>
              <Form.Group>
               </Form.Group>
              <Form.Group controlId="mobilenumber">
                <Form.Label>MOBILENUMBER</Form.Label>
                <Form.Control
                  type="text"
                  name="mobilenumber"
                  value={this.state.mobilenumber}
                  onChange={this.handleChange}
                  placeholder="MOBILENUMBER" />
              </Form.Group>
              <Form.Group>
               </Form.Group>
              <Form.Group controlId="country">
                <Form.Label>COUNTRY</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={this.state.country}
                  onChange={this.handleChange}
                  placeholder="ENTER YOUR COUNTRY NAME" />
              </Form.Group>
              <Form.Group>
                <Button variant="success" type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}



export default Contact;