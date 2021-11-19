import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

const validationLogin = yup.object().shape({
    login: yup.string().required("Campo obrigatório"),
    password: yup
        .string()
        .min(5, "Requer o mínimo de 5 caracteres")
        .required("Campo obrigatório"),
})

const handleClickLogin = (values) => console.log(values)

function LoginSection(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <Title titleColor={props.titleColor}>Faça seu login</Title>

                <Formik
                    initialValues={{}}
                    onSubmit={handleClickLogin}
                    validationSchema={validationLogin}
                >
                    <Form className="login-form">
                        <div className="login-form-group">
                            <Field
                                name="login"
                                className="form-field"
                                placeholder="Login"
                            ></Field>
                            <ErrorMessage
                                component="span"
                                name="nome"
                                className="form-error"
                            ></ErrorMessage>
                        </div>
                        <div className="login-form-group">
                            <Field
                                name="password"
                                className="form-field"
                                placeholder="Password"
                            ></Field>
                            <ErrorMessage
                                component="span"
                                name="password"
                                className="form-error"
                            ></ErrorMessage>
                        </div>
                        <button className="button" type="submit">
                            Login
                        </button>
                    </Form>
                </Formik>
            </Fade>
        </Wrap>
    )
}

export default LoginSection

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};  
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 50px 100px 150px #000;
    padding: 0px;

    .login-form {
        margin-top: 35px;
        text-align: center;
        padding: 10px;
        
    }
    .login-form-group {
        
    }
    .form-field {
        border: 1px solid gray;        
        margin-bottom: 0px;
        height: 40px;
        width: 256px;
        margin: 8px;
        padding-left: 20px;
    }

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
        color: white;
        border: none;
        margin-top: 30px;

        &:hover {
            color: green;
            background-color: black;
            opacity: 1;
            transition: 0.5s ease all;
        }
    }

    .form-error{
        color: red;
        padding-left: 20px;
    }
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.titleColor};
    padding-top: 20vh;
    text-align: center;
`
