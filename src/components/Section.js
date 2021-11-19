import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText titleColor={props.titleColor}>
                    <h1>{props.title} </h1>
                    <p
                        dangerouslySetInnerHTML={{ __html: props.description }}
                    />
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        {props.leftBtnText && (
                           <a href="/login"><LeftButton>{props.leftBtnText}</LeftButton></a>
                        )}
                        {props.rightBtnText && (
                           <a href="/cadastro"> <RightButton>{props.rightBtnText}</RightButton></a>
                        )}
                    </ButtonGroup>
                </Fade>
                {props.arrow && <DownArrow src={props.arrow} />}
            </Buttons>
        </Wrap>
    )
}

export default Section

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
const ItemText = styled.div`
    color: ${(props) => props.titleColor};
    padding-top: 15vh;
    text-align: center;
    p {
        padding: 10px 20px 0px 20px;
        @media (max-width: 600px) {
            padding: 100px 25px 0px 25px;
        }
    }
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    margin: 8px;
    color: white;

    &:hover {
        color: green;
        background-color: black;
        opacity: 1;
        transition: 0.5s ease all;
    }
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
    &:hover {
        color: green;
        background-color: white;
        opacity: 1;
        transition: 0.5s ease all;
    }
`

const DownArrow = styled.img`
    margin-top: 40px
    width: 40px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`
