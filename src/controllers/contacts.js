import { getContacts, getContactById, addContact, updateContactById, deleteContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getContactsController = async (req, res) => {
  const paginationParams = parsePaginationParams(req.query);
  
    const contacts = await getContacts({...paginationParams});
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  };

  export const getContactsByIdController = async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
  
    if (!contact) {
      throw createHttpError(404, "Contact not found");
    }
  
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  };

  export const addContactController = async(req,res) =>{
    const data = await addContact(req.body);
    res.status(201).json({
      status: 201,
      message: 'Successfully created a contact!',
      data,
    });
  };

  export const updateContactByIdController = async(req,res) =>{
    const { contactId } = req.params;
    const updateContact = await updateContactById(contactId, req.body);

    if (!updateContact) {
      throw createHttpError(404, "Contact not found");
    }

    res.json({
      status: 200,
	    message: "Successfully patched a contact!",
	    data: updateContact
    });
  };

  export const deleteContactByIdController = async(req,res) =>{
    const { contactId } = req.params;

    const deleteContact = await deleteContactById(contactId);

    if (!deleteContact) {
      throw createHttpError(404, "Contact not found");
    }
    res.status(204).send();
  };