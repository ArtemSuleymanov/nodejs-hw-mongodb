import {Router} from 'express';
import ctrlWrapper from "../middlewares/ctrlWrapper.js";
import { authRegisterSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../utils/validateBody.js';

const authRouter = Router();

authRouter.post("/register", validateBody(authRegisterSchema),
ctrlWrapper(registerUserController),);

export default authRouter;