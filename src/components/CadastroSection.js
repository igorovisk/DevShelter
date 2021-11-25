import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

const handleClickRegister = (values) => {
    
}

const validationCadastro = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    cpf: yup.string().min(11).max(11).required("Campo obrigatório"),
    login: yup
        .string()
        .min(6)
        .required("Campo obrigatório, mínimo 6 caracteres"),
    password: yup
        .string()
        .min(6)
        .required("Campo obrigatório, mínimo 6 caracteres"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "A senhas não são iguais"),
    dataDeNascimento: yup.date().notRequired(),
    email: yup.string().email().required(),
})

function CadastroSection(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <Title titleColor={props.titleColor}>Cadastre-se</Title>

                <Formik
                    initialValues={{}}
                    onSubmit={handleClickRegister}
                    validationSchema={validationCadastro}
                >
                    <Form className="login-form">
                        <div className="login-form-group">
                            <Field
                                name="nome"
                                className="form-field"
                                placeholder="Nome"
                            ></Field>
                            <ErrorMessage
                                component="p"
                                name="nome"
                                className="form-error"
                            ></ErrorMessage>
                        </div>
                        <div className="login-form-group">
                            <Field
                                name="cpf"
                                className="form-field"
                                placeholder="CPF"
                            ></Field>
                            <ErrorMessage
                                component="p"
                                name="cpf"
                                className="form-error"
                            ></ErrorMessage>
                        </div>

                        <div className="login-form-group">
                            <Field
                                name="login"
                                className="form-field"
                                placeholder="Login"
                            ></Field>
                            <ErrorMessage
                                component="p"
                                name="login"
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
                                component="p"
                                name="password"
                                className="form-error"
                            ></ErrorMessage>
                        </div>

                        <div className="login-form-group">
                            <Field
                                name="confirmPassword"
                                className="form-field"
                                placeholder="Confirme seu password"
                            ></Field>
                            <ErrorMessage
                                component="p"
                                name="password"
                                className="form-error"
                            ></ErrorMessage>
                        </div>
                        <div className="login-form-group">
                            <Field
                                name="dataDeNascimento"
                                className="form-field"
                                placeholder="Data de Nascimento (Ano/Mês/dia)"
                            ></Field>
                            <ErrorMessage
                                component="p"
                                name="dataDeNascimento"
                                className="Deve ser uma data (ano-mes-dia)"
                            ></ErrorMessage>
                        </div>
                        <div className="login-form-group">
                            <Field
                                name="email"
                                className="form-field"
                                placeholder="Email"
                            ></Field>
                            <ErrorMessage
                                component="p"
                                name="email"
                                className="form-error"
                            ></ErrorMessage>
                        </div>
                        <button className="button" type="submit">
                            Registrar-se
                        </button>
                    </Form>
                </Formik>
            </Fade>
        </Wrap>
    )
}

export default CadastroSection

const Wrap = styled.div`
    width: 100vw;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 50px 100px 150px #000;
    padding: 0px;

    .placeholder {
        padding-left: 10px;
    }

    .login-form {
        margin-top: 15px;
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

    .form-error {
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

const Formwrapper = styled.div`
    display: flex;
`
