import { createContext, useEffect, useState } from "react";
import {
  IChildren,
  TContext,
  TCustomers,
  TLogin,
  TRegister,
  TUpdateCustomer,
} from "./interfaces/customer.interface";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isErroComResposta } from "./ContactContext";

export const CustomerContext = createContext<TContext>({} as TContext);

export const CustomerProvider = ({ children }: IChildren) => {
  const [userLogged, setUserLogged] = useState<TCustomers | null>(null);

  const [myContacts, setMyContacts] = useState<TCustomers[]>(
    [] as TCustomers[]
  );
  const [contacts, setContacts] = useState<TCustomers[]>([] as TCustomers[]);

  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);

  // const [notContacts, setNotContacts] = useState<string><('Voce')

  const token = localStorage.getItem("@TOKEN");

  const navigate = useNavigate();

  const UpdateCustomer = async (data: TUpdateCustomer) => {
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
      const response = await api.patch("/customers", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserLogged({ ...userLogged, ...response.data });
      setModalUpdate(false);
      toast.success("perfil atualizado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };
  

  const RegisterCustomer = async (data: TRegister) => {
    try {
      const response = await api.post("/customers", data);
      navigate("/");
      toast.success("conta crianda com sucesso");
    } catch (error) {
      if(isErroComResposta(error)) {
        toast.error(String(error.response.data.message));
      }
    }
  };
  const MyProfileResponse = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.get("/customers/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserLogged(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const autoLogin = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      MyProfileResponse();
      try {
        const response = await api.get("/contacts/mycontacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
        setMyContacts(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error)
        setContacts([]);
        setMyContacts([]);
      }
    }
  };
  const LoginCustomer = async (data: TLogin) => {
    try {
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@CUSTOMER", JSON.stringify(response.data.customer));
      autoLogin();
      toast.success("Login feito com sucesso");
      navigate("/dashboard");
    } catch (error) {
      if(isErroComResposta(error)) {
        toast.error(String(error.response.data.message));
      }
    }
  };

  useEffect(() => {
    if (token) {
      autoLogin();
    }
  }, []);

  const renderMycontacts = () => {
    autoLogin()
  };

  const DeleteAccount = async () => {
    try {
      const response = await api.delete("/customers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
      toast.success("Conta deletada");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const Logout = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <CustomerContext.Provider
      value={{
        RegisterCustomer,
        LoginCustomer,
        userLogged,
        Logout,
        myContacts,
        setContacts,
        contacts,
        renderMycontacts,
        DeleteAccount,
        setIsModal,
        isModal,
        setMyContacts,
        setModalUpdate,
        modalUpdate,
        UpdateCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
