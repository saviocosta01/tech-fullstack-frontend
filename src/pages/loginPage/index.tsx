import { useContext } from "react";
import { TLogin } from "../../context/interfaces/customer.interface";
import ImageLogin from "../../img/projectfullstack.png";
import {
  LoginContainer,
  SectionLogin,
  DivContent,
  DivImg,
  Form,
} from "./style";
import { useForm } from "react-hook-form";
import { CustomerContext } from "../../context/CustomerContext";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const LoginrPage = () => {
  const { register, handleSubmit } = useForm<TLogin>();

  const { LoginCustomer } = useContext(CustomerContext);

  return (
    <LoginContainer>
      <SectionLogin>
        <DivImg>
          <img src={ImageLogin} alt="" />
        </DivImg>
        <DivContent>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit(LoginCustomer)}>
            <Input
              label="Email"
              id="Email"
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
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
              Login
            </Button>
            <Link to={"/register"} className="not-Account">
              Não possui uma conta?
            </Link>
          </Form>
        </DivContent>
      </SectionLogin>
    </LoginContainer>
  );
};
