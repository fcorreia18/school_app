import { Router } from "express";

import { AutenticateUserController } from "../modules/accounts/useCases/autenticateUser/AutenticateUserController";

export const authenticateRoutes = Router();
const autenticateUserController = new AutenticateUserController();
authenticateRoutes.post("/sessions", autenticateUserController.handle);
