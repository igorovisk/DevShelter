import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import InterfaceSection from "../components/InterfaceSection"

function InterfaceLogado(props) {


    return (
        <Container>
            <Header  logoutBtn= "Logout" displayMenuLink="none"/>
            <InterfaceSection  backgroundImg="welcome.jpg" titleColor= "white"/>
        </Container>
    )
}

export default InterfaceLogado

const Container = styled.div`
    width: 100vw; 
    
`
