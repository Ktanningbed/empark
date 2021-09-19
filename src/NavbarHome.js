import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const NavUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #666;
    position: fixed;
    top: 0;
    font-family: "Roboto", sans-serif;
    width: 100%;
`

const NavLi = styled.li`
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    float: left;
    border-right: 1px solid #bbb;
    display: block;
    text-align: center;
    // padding: 16px 16px;
    text-decoration: none;
    transition: 0.3s;
    border: none;
    &:hover {
        background-color: #111;
        color: white;
    }
`
const NavLink = styled(Link)`
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    color: black;
    padding: 10px;
    color: white;
    // font-size: 20px;
`

function NavBarHome(){

    return(
        
        <NavUl>
            <NavLi>
                <NavLink to="/">HOME</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to="/group">GROUP</NavLink>
            </NavLi>
            <NavLi>
                <NavLink to="/login">LOGIN/SIGNUP</NavLink>
            </NavLi>
        </NavUl>
    )
}

export default NavBarHome;