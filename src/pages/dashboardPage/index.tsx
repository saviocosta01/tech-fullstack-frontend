import { HeaderSchedule, DivUser, MainContainer } from "./style";
import { useContext, useState } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import { ListContacts } from "../../components/listContacts";
import { ContactContext } from "../../context/ContactContext";
import { ModalAddContacts } from "../../components/modalAddContacts";
import { VscThreeBars } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {Avatar} from "@mui/material";

export const DashboardPage = () => {
  const { userLogged, Logout, renderMycontacts, setIsModal, isModal } =
    useContext(CustomerContext);
  const { renderAllContacts } = useContext(ContactContext);

  const [isNav, setIsNav] = useState<boolean>(false);

  const navigate = useNavigate();

  const profilePageTransition = () => {
    navigate("/profile");
  };

  return (
    <>
      <HeaderSchedule>
        <DivUser>
        <Avatar src="/broken-image.jpg" variant="circular" style={{backgroundColor: '#000'}}/>
          <h3>{userLogged?.full_name}</h3>
        </DivUser>
        <nav className={isNav ? "flex" : "none"}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={renderMycontacts}
          >
            Meus Contatos
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={renderAllContacts}
          >
            Todos
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={profilePageTransition}
          >
            Meu Perfil
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={() => setIsModal(true)}
          >
            Adicionar Contato
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="small"
            onClick={Logout}
          >
            Sair
          </Button>
        </nav>

        <VscThreeBars
          onClick={() => setIsNav(!isNav)}
          className="btn-configuration"
        />
      </HeaderSchedule>
      <MainContainer>
        <ListContacts />
        {isModal && <ModalAddContacts />}
      </MainContainer>
    </>
  );
};
