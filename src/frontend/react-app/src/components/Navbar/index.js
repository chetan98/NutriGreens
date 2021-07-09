import React from 'react'
import { Nav, NavIcon, NavLink, Bars} from './NavbarElements';


function Navbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavLink to='/'>NutriGreens</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
