import React from 'react'
import { Nav, NavIcon, NavLink, Bars} from './NavbarElements';


function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>NutriGreens</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
