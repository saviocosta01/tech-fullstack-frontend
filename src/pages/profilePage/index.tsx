import {
  HeaderProfile,
  MainContainer,
  PersonalInformation,
  DivBtns,
} from "./style";
import { CapaProfile } from "../../components/capa";
import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import { Link } from "react-router-dom";
import { ModalUpdateCustomer } from "../../components/modalUpdateCustomer";
import { Button } from "@mui/material";
import {BiArrowBack} from "react-icons/bi"

export const ProfilePage = () => {
  const { userLogged, DeleteAccount, modalUpdate, setModalUpdate } =
    useContext(CustomerContext);

  return (
    <>
      <HeaderProfile>
        <CapaProfile />
      </HeaderProfile>
      <MainContainer>
        <PersonalInformation>
          <h2>Informações Pessoais</h2>
          <p>Nome: {userLogged?.full_name}</p>
          <p>Email: {userLogged?.email}</p>
          <p>Telefone: {userLogged?.phone}</p>
        </PersonalInformation>
        <DivBtns>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={() => setModalUpdate(true)}
          >
            Editar perfil
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={DeleteAccount}
            style={{ backgroundColor: "#E24657", color: 'white' }}
          >
            Deletar Conta
          </Button>
        </DivBtns>
        <Link to={"/dashboard"} className="btn-back">
          <BiArrowBack />
        </Link>
        {modalUpdate && <ModalUpdateCustomer />}
      </MainContainer>
    </>
  );
};
