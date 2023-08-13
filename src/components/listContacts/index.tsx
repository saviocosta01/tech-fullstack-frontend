import { useContext } from "react";
import { CustomerContext } from "../../context/CustomerContext";
import {UlContainer } from "./style";
import { Card } from "../card";

export const ListContacts = () =>  {
  const { contacts } = useContext(CustomerContext);

  return(
    <UlContainer key={contacts.length}>
      {
        contacts.length == 0 ? 
        <h3>Você não possui nenhum contato</h3>
        :
        contacts.map((contact) => {
          return (
            <Card key={contact.id} contact={contact}/>
          );
        })
      }
    </UlContainer>
  )
};
