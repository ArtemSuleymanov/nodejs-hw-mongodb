import { Contact } from '../db/models/Contact.js';

export const getContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

export const addContact = async(payload)=>{
  return await Contact.create(payload);
};

export const updateContactById = async (id, payload) => {
  const updatedContact = await Contact.findByIdAndUpdate(id, payload, {
    new: true 
  });

  return updatedContact; 
};

export const deleteContactById = async(id) =>{
  return await Contact.findByIdAndDelete(id);
};