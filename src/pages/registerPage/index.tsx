import {
  RegisterContainer,
  SectionRegister,
  DivContent,
  DivImg,
  Form,
} from "./style";

import ImageRegister from "../../img/telacadastro.png";
import { useForm } from "react-hook-form";
import { TRegister } from "../../context/interfaces/customer.interface";
import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import { Link } from "react-router-dom";
import { Input } from "../../components/input";
import { Button } from "@mui/material";

export const RegisterPage = () => {

    const {RegisterCustomer} = useContext(CustomerContext)

    const {register, handleSubmit} = useForm<TRegister>()
    

  return (
    <RegisterContainer>
      <SectionRegister>
        <DivImg>
          <img src={ImageRegister} alt="" />
        </DivImg>
        <DivContent>
          <h2>Register</h2>
          <Form onSubmit={handleSubmit(RegisterCustomer)}>
          <Input
              label="Nome"
              id="full_name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("full_name")}
              size="medium"
            />
           <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Digite aqui sua email"
              {...register("email")}
              size="medium"
            />
            <Input
              label="Telefone"
              id="phone"
              type="phone"
              placeholder="Digite aqui seu telefone"
              {...register("phone")}
              size="medium"
            />
           <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
              size="medium"
            />
            <Button variant="contained" color="primary" type="submit">
              Cadastrar
            </Button>
            <Link to={"/"} className="login-page">Já possui uma conta?</Link>
          </Form>
        </DivContent>
      </SectionRegister>
    </RegisterContainer>
  );
};
