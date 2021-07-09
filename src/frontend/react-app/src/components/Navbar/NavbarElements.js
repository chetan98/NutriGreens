import styled from "styled-components";
import { NavLink as Link } from "react-router-dom"
import {RiPlantLine} from "react-icons/ri"
export const Nav = styled.nav`
    background : transparent;
    height : 80px;
    display : flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size : 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-weight: 400px){
        position: absolute;
        top: 10px;
        left : 25px
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 2.5%;
    right: 5%;
    cursor: pointer;
    color: #fff;

    p{
        transform: translate(-175%, -100%)
        font-weight: bold;
        font-size : 2rem;
    }
`

export const Bars = styled(RiPlantLine)`
    font-size: 2rem;
    transform: translate(350%,-115%);
`

