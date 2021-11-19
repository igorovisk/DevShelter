import React from "react"
import styled from "styled-components"
import Header from "./Header"
import CadastroSection from "./CadastroSection"

function Cadastro() {
    return (
        <Container>
            <Header />
            <CadastroSection
                backgroundImg="cadastro-background2.jpg"                
                titleColor="white"
            />
        </Container>
    )
}

export default Cadastro

const Container = styled.div`
    width: 100vw;   
`

