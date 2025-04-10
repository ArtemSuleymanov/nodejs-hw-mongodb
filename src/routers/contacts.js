import {Router} from 'express';
import {getContactsController, getContactsByIdController, addContactController, updateContactByIdController, deleteContactByIdController} from "..//controllers/contacts.js";
import ctrlWrapper from "../middlewares/ctrlWrapper.js";
import { validateBody } from '../utils/validateBody.js';
import { isValidId } from '../utils/isValidId.js';
import { contactAddSchema, contactUpdateSchema } from '../validation/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:contactId',ctrlWrapper(getContactsByIdController));
contactsRouter.post('/',validateBody(contactAddSchema),ctrlWrapper(addContactController));
contactsRouter.patch('/:contactId',isValidId(contactUpdateSchema),ctrlWrapper(updateContactByIdController));
contactsRouter.delete('/:contactId',ctrlWrapper(deleteContactByIdController));

export default contactsRouter;