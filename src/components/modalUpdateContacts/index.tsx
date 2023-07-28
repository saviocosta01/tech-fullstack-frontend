import { useContext } from "react";
import { ModalContainer, Modal, FormModal } from "./style";
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form"
import { TUpdateCustomer } from "../../context/interfaces/customer.interface";
import { Input } from "../input";
import { Button } from "@mui/material";
import { ContactContext } from "../../context/ContactContext";

export const ModalUpdateContact = () => {
  const {setModalContacts, updateContactResponse, contactId} = useContext(ContactContext)
  const { register, handleSubmit } = useForm<TUpdateCustomer>();

    const testeteste = (data: TUpdateCustomer) => {
        updateContactResponse(data, contactId!)
    }
  return (
    <ModalContainer>
      <Modal>
        <div className="div-titile">
          <h2>Editar Contato</h2>
          <GrClose onClick={() => setModalContacts(false)} className="close-modal" />
        </div>
        <FormModal onSubmit={handleSubmit(testeteste)}>
        <Input
            label="Nome"
            id="full_name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("full_name")}
            size="small"
          />
          <Input
            label="Email"
            id="Email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
            size="small"
          />
          <Input
            label="Telefone"
            id="phone"
            type="text"
            placeholder="Digite aqui seu telefone"
            {...register("phone")}
            size="small"
          />
          <Button variant="contained" color="primary" type="submit">
            Atualizar contato
          </Button>
        </FormModal>
      </Modal>
    </ModalContainer>
  );
};