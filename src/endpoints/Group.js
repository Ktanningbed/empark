import styled from 'styled-components'
import Login from "./Login"
import {Route, Link} from 'react-router-dom'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Login.css"
import React, { useState } from "react"

function Group(){
    const [code, setCode] = useState("")
    const [locations, setLocations] = useState("")

    function validateForm() {
      return code.length==4
    }
  
    function handleSubmit(event) {
      event.preventDefault()
      fetch(`http://127.0.0.1:5000/locations/${code}`).then(res => res.json()).then(data => {
        setLocations(data)
        console.log(data)
      })
    }

    //create some group code and send to the database??
    if(global.loginStat){
        return (
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="text">
                    <Form.Control placeholder="Group Code"
                    autoFocus
                    type="text" maxlength='4'
                    value={code}
                    onChange={(e) => {
                        setCode(e.target.value)
                        console.log(e.target.value)
                    }}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Enter
                </Button>
                </Form>
                <div>
                <p> list of people: {locations.people}</p>
                <br></br>
                <p> list of places: {locations.places}</p>
                </div>
                {/* <div>
                    {code}
                </div> */}
            </div>
        )
    }
    else{
        return(
            
            <Route exact path="/login" component={Login} />
            
        )
    }
}

export default Group;