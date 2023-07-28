import { useContext } from "react";
import { ModalContainer, Modal, FormModal } from "./style";
import { CustomerContext } from "../../context/CustomerContext";
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../context/ContactContext";
import { TCreateContact } from "../../context/interfaces/contacts.interface";
import { Input } from "../input";
import { Button } from "@mui/material";

export const ModalAddContacts = () => {
  const { setIsModal } = useContext(CustomerContext);
  const { createContactResponse } = useContext(ContactContext);

  const { register, handleSubmit } = useForm<TCreateContact>();

  return (
    <ModalContainer>
      <Modal>
        <div className="div-titile">
          <h2>Adicionar Contato</h2>
          <GrClose onClick={() => setIsModal(false)} className="close-modal" />
        </div>
        <FormModal onSubmit={handleSubmit(createContactResponse)}>
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
            Adicionar Contato
          </Button>
        </FormModal>
      </Modal>
    </ModalContainer>
  );
};
