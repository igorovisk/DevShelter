import React from 'react'
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

const handleClickRegister = (values) => console.log(values)

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
function formCadastro() {
    return (
        <div>
             <h1>Não tem conta ainda? Cadastre-se</h1>
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
                            component="span"
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
                            component="span"
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
                            component="span"
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
                            component="span"
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
                            component="span"
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
                            component="span"
                            name="dataDeNascimento"
                            className="form-error"
                        ></ErrorMessage>
                    </div>
                    <div className="login-form-group">
                        <Field
                            name="email"
                            className="form-field"
                            placeholder="Email"
                        ></Field>
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="form-error"
                        ></ErrorMessage>
                    </div>
                    <button className="button" type="submit">
                        Registrar-se
                    </button>
                </Form>
            </Formik>
        </div>      
    )
}

export default formCadastro
