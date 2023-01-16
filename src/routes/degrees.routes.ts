import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateDegreeController } from "../modules/school/useCases/createDegreeUseCase/CreateDegreeController";
import { GetDegreeController } from "../modules/school/useCases/getDegreeUseCase/GetDegreeController";
import { UpdateDegreeController } from "../modules/school/useCases/updateDegreeUseCase/UpdateDegreeController";

const degreeRoutes = Router();
const createDegreeController = new CreateDegreeController();
const getDegreeController = new GetDegreeController();
const updateDegreeController = new UpdateDegreeController();
degreeRoutes.post("/", ensureAuthenticated, createDegreeController.handle);
degreeRoutes.get("/", getDegreeController.handle);
degreeRoutes.put("/:id", ensureAuthenticated, updateDegreeController.handle);

export { degreeRoutes };
