import styled from 'styled-components'
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {Route, Link} from "react-router-dom"
import Login from "./Login"
// import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function Signup() {

    //add email and password to database

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dis, setDis] = useState(0);
  const [option, setOption] = useState("Choose your preferred method of transportation");
  const [postal, setPostal] = useState("")
  const [code, setCode] = useState()
  function validateForm() {
    return username.length > 0 && password.length > 0 && option!="Choose your preferred method of transportation" 
    && dis!=0 && code.length==4 && postal.length==6
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = { user: username, passwd: password, groupcode: code, travel_distance: dis, transport_type: option, postalcode: postal};
    console.log('submit');
    console.log(data);
    fetch('http://127.0.0.1:5000/add/', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json()).then(res => console.log(res));
    setUsername("")
    setPassword("")
    setDis("")
    setOption("Choose your preferred method of transportation")
    setPostal("")
    setCode("")
    
  }
  const handleSelect=(e)=>{
    console.log(e);
    setOption(e)
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="text">
          <Form.Control placeholder="Username"
            autoFocus
            type="text"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
                console.log(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="text">
          <Form.Control placeholder="Postal Code"
            type="text" maxlength='6'
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="text">
          <Form.Control placeholder="Group Code"
            type="text" maxlength='4'
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="text" >
          <Form.Control placeholder="Travel distance in meters"
            type="number" min="0"
            value={dis}
            onChange={(e) => setDis(e.target.value)}
          />
        </Form.Group>
        <br/>
        <DropdownButton
            alignRight
            title={option}
            onSelect={handleSelect}
                >
                    <Dropdown.Item eventKey="CAR">CAR</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item eventKey="WALK">WALK</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item eventKey="BUS">BUS</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item eventKey="BIKE">BIKE</Dropdown.Item>
            </DropdownButton>
        <br/>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign-up 
        </Button>
        
      </Form>
      
    </div>
  );
}