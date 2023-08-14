import { createContext, useContext, useState } from "react";
import { IChildren, TUpdateCustomer } from "./interfaces/customer.interface";
import {
  TContacts,
  TContextContact,
  TCreateContact,
} from "./interfaces/contacts.interface";
import { api } from "../services/api";
import { CustomerContext } from "./CustomerContext";
import { toast } from "react-toastify";

interface ErroComResposta {
  response: {
    data: {
      message: string;
    };
  };
}

export function isErroComResposta(error: any): error is ErroComResposta {
  return (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  );
}

export const ContactContext = createContext<TContextContact>(
  {} as TContextContact
);

export const ContactProvider = ({ children }: IChildren) => {
  const [allContacts, setAllContacts] = useState<TContacts[]>(
    [] as TContacts[]
  );
  const [contactId, setContactId] = useState<number | null>(null);

  const [modalContacts, setModalContacts] = useState<boolean>(false);
  const { setContacts, setMyContacts, setIsModal, contacts } =
    useContext(CustomerContext);

  const token = localStorage.getItem("@TOKEN");

  const updateContactResponse = async (data: TUpdateCustomer, id: number) => {
    if (data.full_name == "") {
      delete data.full_name;
    }
    if (data.email == "") {
      delete data.email;
    }
    if (data.phone == "") {
      delete data.phone;
    }
    try {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await api.patch(`/contacts/${id}`, data);

      const newContact = contacts.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...response.data };
        } else {
          return contact;
        }
      });
      setContacts(newContact);
      setMyContacts(newContact);
      toast.success("Contato deletado");
      setModalContacts(false);
    } catch (error) {
      if(isErroComResposta(error)) {
        toast.error(String(error.response.data.message));
      }
    }
  };

  const deleteContactResponse = async (id: number) => {
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newContactList = contacts.filter((contact) => contact.id !== id);
      toast.success("Contato deletado");
      setContacts(newContactList);
    } catch (error) {
      if(isErroComResposta(error)) {
        toast.error(String(error.response.data.message));
      }
    }
  };

  const createContactResponse = async (data: TCreateContact) => {
    try {
      const response = await api.post<TContacts>("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts([...contacts, response.data]);
      setIsModal(false);
      toast.success("Contato criado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const listAllContacts = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
        setAllContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderAllContacts = () => {
    listAllContacts();
  };

  return (
    <ContactContext.Provider
      value={{
        allContacts,
        renderAllContacts,
        createContactResponse,
        updateContactResponse,
        setModalContacts,
        deleteContactResponse,
        modalContacts,
        setContactId,
        contactId,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
