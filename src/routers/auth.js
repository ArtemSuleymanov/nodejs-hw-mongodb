import {Router} from 'express';
import ctrlWrapper from "../middlewares/ctrlWrapper.js";
import { authRegisterSchema, authLoginSchema } from '../validation/auth.js';
import { registerUserController, loginController, refreshController } from '../controllers/auth.js';
import { validateBody } from '../utils/validateBody.js';

const authRouter = Router();

authRouter.post("/register", validateBody(authRegisterSchema),
ctrlWrapper(registerUserController),);

authRouter.post("/login", validateBody(authLoginSchema), ctrlWrapper(loginController));

authRouter.post("/refresh", ctrlWrapper(refreshController));

export default authRouter;