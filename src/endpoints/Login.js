import styled from 'styled-components'
import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Login.css"
import {Link} from "react-router-dom"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
const NavLink = styled(Link)`
    font-size: 20px;
`

const loginsuccess = styled.div`
    visibility: hidden;
`

global.accountInfo = {}
export default function Login() {

    //check if this email and password exists in the database
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [dis, setDis] = useState(0);
    const [option, setOption] = useState("Choose your preferred method of transportation");
    const [postal, setPostal] = useState("")
    const [code, setCode] = useState()
  
    function validateForm() {
      return username.length > 0 && password.length > 0;
    }
    const handleSelect=(e)=>{
        console.log(e);
        setOption(e)
    }
    
    function handleSubmit(event) {
    //   event.preventDefault();
        event.preventDefault();
        const data = { "user": username, "passwd": password};
        console.log('submit');
        console.log(data);
        fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json()).then(accountdata => {
          console.log(accountdata);
          setLoginStatus(accountdata);
        });
        document.getElementById('lol').style.visibility = 'visible'
        // setUsername("");
        // setPassword("");
    }

    function handleSubmit2(event){
        event.preventDefault()
        const data = {"name":username, "passwd":password, "groupcode": code, "travel_distance": dis, "transport_type": option};
        console.log('submit');
        console.log(data);
        fetch('http://127.0.0.1:5000/update', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json()).then(output => {
          console.log(output);

        });
        document.getElementById('lol').style.visibility = 'visible'
        setUsername("");
        setPassword("");
    }
    // if(!global.loginStat){
        return (
        <div className="Login" id='add'>
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
                <Form.Control placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Form>
        <div>
                <NavLink to="/signup">Don't have an account?</NavLink>
        </div>
        
        <p>{loginStatus.status}</p>
        <loginsuccess id='lol'>

        
        <Form onSubmit={handleSubmit2}>
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
            <Button block size="lg" type="submit">
                Update!
            </Button>
          </Form>
          
        </loginsuccess>
        <br/>
        </div>
        );
    // }
    // return(
    //     console.log("no")
    // )
}