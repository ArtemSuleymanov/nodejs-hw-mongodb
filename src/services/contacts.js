import { Contact } from '../db/models/Contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getContacts = async ({page = 1, perPage = 10}) => {
  const skip = (page - 1) * perPage;
  const contacts = await Contact.find().skip(skip).limit(perPage);
  const totalItems = await Contact.find().countDocuments();

  const paginationData = calculatePaginationData({page, perPage, totalItems});
  
  return {
    contacts,
    totalItems,
    ...paginationData,
  };
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