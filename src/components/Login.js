import React from "react"
import styled from "styled-components"

import Header from "./Header"
import LoginSection from "./LoginSection"

function Login() {
    return (
        <Container>
            <Header />
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
    height: 100vh;
`
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 50px 100px 150px #000;
    padding: 0px;
`
