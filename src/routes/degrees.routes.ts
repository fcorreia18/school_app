import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateDegreeController } from "../modules/school/useCases/createDegreeUseCase/createDegreeController";
import { GetDegreeController } from "../modules/school/useCases/getDegreeUseCase/GetDegreeController";

const degreeRoutes = Router();
const createDegreeController = new CreateDegreeController();
const getDegreeController = new GetDegreeController();
degreeRoutes.post("/", ensureAuthenticated, createDegreeController.handle);
degreeRoutes.get("/", getDegreeController.handle);

export { degreeRoutes };
