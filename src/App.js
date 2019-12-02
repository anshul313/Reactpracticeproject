import React from 'react';
import {
  Redirect
}
from 'react-router-dom';
import './App.css';
import FacebookLoginWithButton from 'react-facebook-login';
import {
  GoogleLogin
}
from 'react-google-login';
import {
  Row, Form, Col, Button
}
from 'react-bootstrap';
import Home from "./Home";
import {
  Navbar, Nav
}
from 'react-bootstrap';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log("Clicked!")
}
const responseGoogle = (response) => {
  console.log(response.profileObj.email);
  console.log(response.profileObj.name);
  console.log(response.profileObj.imageUrl);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.initialState = {
      email: '',
      password: '',
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
    const apiUrl = 'http://localhost:8090/api/login';

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
        console.log('result is', result);
        console.log('authToken is', result.data.authToken);
        localStorage.setItem("token", result.data.authToken)
        console.log('localstorage result is', localStorage.getItem("token"));

        if (result.status === 200) {
          this.setState({
            response: result,
            loggedIn: true,
          })
        }
      }, (error) => {
        this.setState({
          error
        });
      })
  }


  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/Home'  />
    }
    return (
      <div class="App">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="/">SIGNUP & LOGIN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/contact">create new account</Nav.Link>
      <Nav.Link href="/">login here</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
   
    <div class="LoginFacebook">
     <FacebookLoginWithButton
      appId="2442990185797966"
      autoLoad
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"/>
      </div>
      <br></br>
      <br></br>
      <div class="LoginGoogle">
      <GoogleLogin
    clientId="229599157706-o80v5ir253r181neav075nkudsga1dp1.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
      />
    </div>
       <div class="login">
      <Row>
          <Col sm={6}>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="email">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter your email address" />
              </Form.Group>
               <Form.Group controlId="password">
                <Form.Label>password</Form.Label>
                <Form.Control
                  type = "password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Enter your secret password" />
              </Form.Group>
              <Form.Group>
                <Button variant="success" type="submit">LOGIN</Button>
              </Form.Group>
              </Form>
              </Col>
              </Row>
              </div>
     
      </div>
    );
  }
}

export default App;