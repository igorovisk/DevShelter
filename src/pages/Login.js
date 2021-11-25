import React from "react"
import styled from "styled-components"

import Header from "../components/Header"
import LoginSection from "../components/LoginSection"

function Login() {
    return (
        <Container>
            <Header loginBtn= "Login"  cadastroBtn= "Cadastro"/>
            <LoginSection
                backgroundImg="login-background.jpg"
                title="DevShelter"
                titleColor="white"
            />
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100vw;  
`
