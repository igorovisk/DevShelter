import React, { useState } from "react"
import styled from "styled-components"
import { Menu as MenuIcon } from "@material-ui/icons"
import { Close as CloseIcon } from "@material-ui/icons"

function Header() {
    const [burguerStatus, setBurguerStatus] = useState(false)

    return (
        <div>
            <Container>
                <a href="/">
                    <img
                        className="logo"
                        src="/images/logo-white.png"
                        alt="logo"
                    ></img>
                </a>
                <div>
                    <Menu>
                        <a href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="#">Cadastrar-se</a>
                    </Menu>

                    <HamburguerWrap>
                        <HamburguerMenu
                            onClick={() => setBurguerStatus(true)}
                        />
                    </HamburguerWrap>

                    <BurguerNav show={burguerStatus}>
                        <CloseWrapper>
                            <CustomClose
                                onClick={() => setBurguerStatus(false)}
                            />
                        </CloseWrapper>
                        <li>
                            <a href="/login">Login</a>
                            <a href="#">Cadastrar-se</a>
                        </li>
                    </BurguerNav>
                </div>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    top: 0;
    left: 0;
    right: 0;
   

    img {
        height: 50px;
    }
    div {
        display: flex;
    }
`
const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content:center
    flex:1;
    font-weight: 600;
  
    a{
        padding: 0px 15px;
        &:hover{
            color: green; 
            transition: 0.5s ease all;       
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const HamburguerWrap = styled.div`
    display: none;
    svg {
        display: none;
        @media (max-width: 768px) {
            display: flex;
        }
    }
`
const HamburguerMenu = styled(MenuIcon)`
    color: white;
    margin-left: 20px;
    cursor: pointer;

    &:hover {
        color: green;
        transition: 0.5s ease all;
    }
`

const BurguerNav = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;

    top: 0;
    bottom: 0;
    right: 0;
    color: black;

    background-color: white;

    width: 200px;
    height: 165px;
    z-index: 16;
    list-style: none;
    padding: 20px;

    text-align: start;

    transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(100%)"};
        transition: transform 0.2s ease-in;
    li {
        display: flex;
        flex-direction: column;
        padding: 15px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
    a {
        font-weight: 600;
        padding: 10px 0;
        color: black;
        &:hover {
            color: green;
            transition: 0.5s ease all;
        }
    }
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
    &:hover{
        transition: 0.5s ease all;
        color: red;
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15px;
`
