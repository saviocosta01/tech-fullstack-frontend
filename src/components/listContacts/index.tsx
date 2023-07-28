import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import { Card, UlContainer, DivBtns, DivContent } from "./style";
import { MdDelete } from "react-icons/md";
import { ContactContext } from "../../context/ContactContext";
import { ModalUpdateContact } from "../modalUpdateContacts";

export const ListContacts = () => {
  const { contacts } = useContext(CustomerContext);
  const {
    setModalContacts,
    deleteContactResponse,
    modalContacts,
    setContactId,
  } = useContext(ContactContext);

  const funcaoTeste = (id: number) => {
    setModalContacts(true);
    setContactId(id);
  };
  return (
    <UlContainer key={contacts.length}>
      {
        contacts.length == 0 ? 
        <h3>Você não possui nenhum contato</h3>
        :
        contacts.map((contact) => {
          return (
            <Card key={contact.id}>
              <DivContent>
              <div>
                <h4>Nome:</h4>
                <h4>{contact.full_name}</h4>
              </div>
              <div>
                <p>Telefone:</p>
                <p>{contact.phone}</p>
              </div>
              <div>
                <p>Email:</p>
                <p>{contact.email}</p>
              </div>
              </DivContent>
              <DivBtns>
                <div className="div-btn-edit" onClick={() => funcaoTeste(contact.id)}>
                  <button>
                    Editar
                  </button>
                </div>
                <div className="div-btn-delete"onClick={() => deleteContactResponse(contact.id)}>
                  <button >
                    Deletar
                  </button>
                  <MdDelete />
                </div>
              </DivBtns>
              {modalContacts && <ModalUpdateContact />}
            </Card>
          );
        })
      }
    </UlContainer>
  );
};
