import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import LogadoSection from "../components/LogadoSection"


function InterfaceLogado(props) {
    return (
        <Container>
            <Header displayMenuLink="none"/>
            <LogadoSection backgroundImg="welcome.jpg" titleColor= "white"/>
        </Container>
    )
}

export default InterfaceLogado

const Container = styled.div`
    width: 100vw;   
    height: 100vh;
`
