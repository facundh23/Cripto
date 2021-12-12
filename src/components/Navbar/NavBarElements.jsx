import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav` 
    background: #000000d1;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    z-index: 10;

`

export const NavLink = styled(Link)`
    color:white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 20px;
    height: 100%;
    cursor: pointer;


    &.active{
        border-bottom:red;
        
    }


`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)` 
border-radius:4px;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition:all 0.2s ease-in-out ;
text-decoration: none;

&:hover{
    transition:all 0.2s ease-in-out ;

}
`