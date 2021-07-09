import React from 'react';
import { SidebarContainer, SideBtnWrap, SidebarLink, SidebarMenu, Icon, CloseIcon, SidebarRoute } from './SidebarElements';

function index({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Menu</SidebarLink>
                <SidebarLink to="/">Feature</SidebarLink>
                <SidebarLink to="/">Recipe</SidebarLink>
                <SidebarLink to="/">About Us</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/" >Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default index
