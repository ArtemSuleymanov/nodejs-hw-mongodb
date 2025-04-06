import {Router} from 'express';
import {getContactsController, getContactsByIdController, addContactController} from "..//controllers/contacts.js";
import ctrlWrapper from "../middlewares/ctrlWrapper.js";

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));

contactsRouter.get('/:contactId',ctrlWrapper(getContactsByIdController));
contactsRouter.post('/',ctrlWrapper(addContactController));

export default contactsRouter;