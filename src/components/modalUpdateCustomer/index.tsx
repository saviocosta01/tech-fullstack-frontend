import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import { ModalContainer, Modal, FormModal } from "./style";
import { GrClose } from "react-icons/gr";
import { useForm } from "react-hook-form"
import { TUpdateCustomer } from "../../context/interfaces/customer.interface";
import { Input } from "../input";
import { Button } from "@mui/material";

export const ModalUpdateCustomer = () => {
  const {setModalUpdate, UpdateCustomer} = useContext(CustomerContext)
  const { register, handleSubmit } = useForm<TUpdateCustomer>();
  return (
    <ModalContainer>
      <Modal>
        <div className="div-titile">
          <h2>Editar Perfil</h2>
          <GrClose onClick={() => setModalUpdate(false)} className="close-modal" />
        </div>
        <FormModal onSubmit={handleSubmit(UpdateCustomer)}>
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
            Atualizar Perfil
          </Button>
        </FormModal>
      </Modal>
    </ModalContainer>
  );
};
