import { Contact } from '../db/models/Contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { sortList } from '../constants/index.js';

export const getContacts = async ({page = 1, perPage = 10, sortBy = "_id", sortOrder = sortList[0], filter = {}}) => {
  const skip = (page - 1) * perPage;
  const contacts = await Contact.find(filter).skip(skip).limit(perPage).sort({[sortBy]: sortOrder});
  const totalItems = await Contact.find().countDocuments(filter);

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