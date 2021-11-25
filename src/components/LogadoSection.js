import React, { useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import axios from "axios"
import redirectUserIfNotLogged from "../utils/redirectUserIfNotLogged"

function LogadoSection(props) {
    redirectUserIfNotLogged("/interface")

    const id = localStorage.getItem("id")

    async function userInfo() {
        await axios
            .get(`http://localhost:5000/usuarios/${id}`, {
                headers: { "x-access-token": localStorage.getItem("token") },
            })
            .then(

            )
    }

    console.log(userInfo)
    // const userInfoData = getUserInfo()

    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText titleColor={props.titleColor}>
                    <h1>
                        Bem vindo à Plataforma DevShelter,{userInfo}
                        {console.log()}
                        <br /> Este é o seu perfil:
                    </h1>
                </ItemText>
            </Fade>
            <Painel>
                <Perfil>
                    <InfoBox>
                        <InfoName>Nome</InfoName>
                        {/* <InfoText>{nome}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Login</InfoName>
                        {/* <InfoText>{login}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Email</InfoName>
                        {/* <InfoText>{email}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>CPF</InfoName>
                        {/* <InfoText>{habilidades}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Habilidades</InfoName>
                        {/* <InfoText>{habilidades}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Habilidades</InfoName>
                        {/* <InfoText>{habilidades}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Habilidades</InfoName>
                        {/* <InfoText>{habilidades}</InfoText> */}
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Habilidades</InfoName>
                        {/* <InfoText>{habilidades}</InfoText> */}
                    </InfoBox>
                </Perfil>
            </Painel>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <button className="button">
                            <a href="/alterarmeuperfilsection">
                                Gerenciar Perfil
                            </a>
                        </button>
                        <button className="button">
                            <a href="/gerenciarhabilidadessection">
                                Gerenciar Habilidades
                            </a>
                        </button>
                        <button className="button">
                            <a href="/buscardesenvolvedorsection">
                                Buscar Desenvolvedores
                            </a>
                        </button>
                    </ButtonGroup>
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default LogadoSection

const Wrap = styled.div`
    width: 100vw;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 50px 100px 150px #000;
    padding: 10px;

    .button {
        background-color: rgba(23, 26, 32, 0.8);
        height: 40px;
        width: 256px;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        margin: 8px;
        border: none;
        margin-top: 80px;

        &:hover {
            color: green !important;
            background-color: black;
            opacity: 1;
            transition: 0.5s ease all;
        }

        @media (max-width: 600px) {
            margin-top: 45px;
        }
    }
`
const ItemText = styled.div`
    color: ${(props) => props.titleColor};
    padding-top: 15vh;
    text-align: center;
    font-size: 12px;
   
        
        @media (max-width: 600px) {
            padding: 20vh 25px 0px 25px;
        }
    }
`
const ButtonGroup = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;

        margin-botton: 30px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`
const Painel = styled.div`
    margin-top: 20px;
`

const Perfil = styled.div`
    color: white;
    background-color: pink;
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: left;
`

const InfoBox = styled.div`
    display: flex;
    padding: 5px;
    justify-content: space-between;
`
const InfoName = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    padding: 5px;
`
const InfoText = styled.div`
    padding: 5px;
`
