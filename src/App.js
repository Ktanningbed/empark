import React, { useState } from 'react'
import styled from 'styled-components'
import Login from "./endpoints/Login"
import Home from "./endpoints/Home"
import Group from "./endpoints/Group"
import {Route, Link} from 'react-router-dom'
import NavBarHome from "./NavbarHome"
import Signup from "./endpoints/Signup"

// const LoginButton = styled.button`
//     cursor: pointer;
//     background: #188f40;
//     font-family: Trebuchet Ms;
//     font-size: 20pt;
//     color: #055922;
//     border-color: #2bc5358f;
//     height: 40px;
//     width: 300px;
//     transition: 0.3s;
//     border: none;
//     &:hover {
//         background-color: #51d35a;
//         color: #313632;
//     }
// `

const AppContainer = styled.div`
  text-align: center;
  
  font-size: 30px;
  
`

global.loginStat = true

function App() {
  
  
  return (
  <AppContainer>
    <NavBarHome/>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login}/>
    <Route exact path="/group" component={Group} />
    <Route exact path="/signup" component={Signup} />
  </AppContainer>
  )
}

export default App;
