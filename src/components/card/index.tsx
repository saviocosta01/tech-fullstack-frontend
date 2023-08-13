import { useContext, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { CardStyle, DivBtns, DivContent } from "./style";
import { TContacts } from "../../context/interfaces/contacts.interface";
import { ContactContext } from "../../context/ContactContext";
import { ModalUpdateContact } from "../modalUpdateContacts";
import {MdDelete} from "react-icons/md"

interface TiltCardProps {
    title: string;
    content: string;
    contact: TContacts;
  }

export const Card: React.FC<TiltCardProps> = ({ title, content, contact }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const {
    setModalContacts,
    deleteContactResponse,
    modalContacts,
    setContactId,
  } = useContext(ContactContext);

  const EditContact = (id: number) => {
    setModalContacts(true);
    setContactId(id);
  };

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });

      return () => cardRef.current?.vanillaTilt.destroy();
    }
  }, []);

  return (
    <>
    <CardStyle ref={cardRef} className="tilt-card">
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
        <div className="div-btn-edit" onClick={() => EditContact(contact.id)}>
          <button>Editar</button>
        </div>
        <div
          className="div-btn-delete"
          onClick={() => deleteContactResponse(contact.id)}
        >
          <button>Deletar</button>
          <MdDelete />
        </div>
      </DivBtns>
    </CardStyle>
      {modalContacts && <ModalUpdateContact />}
    </>
  );
};
