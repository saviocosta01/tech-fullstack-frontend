import { ReactNode } from "react"


export type IChildren = {
    children: ReactNode
}


export type TRegister = {
    full_name: string,
    phone: string,
    email: string,
    password: string
}

export type TLogin = {
    email: string,
    password: string
}

export type TCustomers = {
    id: number,
    full_name: string,
    email: string,
    password: string,
    phone: string,
    registration_Date: string
}


export interface TUpdateCustomer {
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
}



export type TContext = {
    RegisterCustomer: (data: TRegister) => void,
    LoginCustomer: (data: TLogin) => Promise<void>,
    userLogged: TCustomers | null,
    Logout: () => void,
    myContacts: TCustomers[],
    setContacts: React.Dispatch<React.SetStateAction<TCustomers[]>>,
    contacts: TCustomers[],
    renderMycontacts: () => void,
    DeleteAccount: () => Promise<void>,
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModal: boolean,
    setMyContacts: React.Dispatch<React.SetStateAction<TCustomers[]>>
    setModalUpdate: React.Dispatch<React.SetStateAction<boolean>>,
    modalUpdate: boolean,
    UpdateCustomer: (data: TUpdateCustomer) => Promise<void>
}

