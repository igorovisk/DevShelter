import React from "react"
import styled from "styled-components"
import Section from "./Section"
import Header from "./Header"

function Home() {
    return (
        
        <Container>
           <Header />
            <Section
                title="DevShelter"
                titleColor="white"
                description="Vagas de desenvolvimento de software.<br />Crie seu perfil
                    grátis, receba várias propostas e economize seu tempo."
                backgroundImg="computador.jpg"
                leftBtnText="Faça seu login"
                rightBtnText="Cadastre-se"
                arrow="/images/down-arrow.svg"
            />
            <Section
                title="Empresa"
                titleColor="white"
                description="Quer contratar um desenvolvedor? Deixa com a gente."
                backgroundImg="note2.jpg"
                rightBtnText="Cadastre-se"
                arrow="/images/down-arrow.svg"
            />
            <Section
                title="Desenvolvedor"
                titleColor="white"
                description="Procura emprego? Nós te ajudamos no processo."
                backgroundImg="note.jpg"
                rightBtnText="Cadastre-se"
                arrow=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
