import {Router} from 'express';
import {getContactsController, getContactsByIdController, addContactController, updateContactByIdController, deleteContactByIdController} from "..//controllers/contacts.js";
import ctrlWrapper from "../middlewares/ctrlWrapper.js";

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:contactId',ctrlWrapper(getContactsByIdController));
contactsRouter.post('/',ctrlWrapper(addContactController));
contactsRouter.patch('/:contactId',ctrlWrapper(updateContactByIdController));
contactsRouter.delete('/:contactId',ctrlWrapper(deleteContactByIdController));

export default contactsRouter;