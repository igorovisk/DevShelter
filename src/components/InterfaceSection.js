import React, { useState } from "react"
import styled, { useTheme } from "styled-components"
import Fade from "react-reveal/Fade"
import axios from "axios"
import redirectUserIfNotLogged from "../utils/redirectUserIfNotLogged"
import { useEffect } from "react"

function LogadoSection(props) {
    redirectUserIfNotLogged("/interface")
    const [user, setUser] = useState("")

    const id = localStorage.getItem("id")

    function getUserInfo() {
        axios
            .get(`http://localhost:5000/usuarios/${id}`, {
                headers: { "x-access-token": localStorage.getItem("token") },
            })
            .then((result) => {
                console.log(result)
                setUser(result.data)
                
            })
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText titleColor={props.titleColor}>
                    <h1>
                        Bem vindo à Plataforma DevShelter, {user.nome}
                        {console.log()}
                        <br /> Este é o seu perfil:
                    </h1>
                </ItemText>
            </Fade>
            <Painel>
                <Perfil>
                    <InfoBox>
                        <InfoName>Nome</InfoName>
                        <InfoText>{user.nome}</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Login</InfoName>
                        <InfoText>{user.login}</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Email</InfoName>
                        <InfoText>{user.email}</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoName>CPF</InfoName>
                        <InfoText>{user.cpf}</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Data de Nascimento</InfoName>
                        <InfoText>{user.dataDeNascimento}</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoName>Habilidades</InfoName>
                        <InfoText>{user.habilidades}</InfoText>
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
    margin-top: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
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
    color: black;
    border: 2px solid #052106;
    background-color: #e0e0e0;
    border-radius: 10px;
    width: 50vw;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: left;
`

const InfoBox = styled.div`
    display: flex;
    padding: 5px;
    
    justify-content: space-between;
    border: 1px solid #052106;
    border-radius: 5px;
`
const InfoName = styled.div`

    color: black;
    text-transform: uppercase;
    font-weight: 700;
    padding: 5px;
`
const InfoText = styled.div`
    padding: 5px;
`
