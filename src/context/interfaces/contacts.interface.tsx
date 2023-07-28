import { TCustomers, TUpdateCustomer } from "./customer.interface";



export interface TContacts extends TCustomers{}

export type TCreateContact = {
    full_name: string,
    email: string,
    phone: string,
}

export type TContextContact = {
    allContacts: TContacts[],
    renderAllContacts: () => void,
    createContactResponse: (data: TCreateContact) => Promise<void>,
    updateContactResponse: (data: TUpdateCustomer, id: number) => Promise<void>,
    setModalContacts: React.Dispatch<React.SetStateAction<boolean>>,
    deleteContactResponse: (id: number) => Promise<void>,
    modalContacts: boolean,
    setContactId: React.Dispatch<React.SetStateAction<number | null>>,
    contactId: number | null

}

