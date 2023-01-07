import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateCourseController } from "../modules/school/useCases/createCourseUseCase/CreateCourseController";
import { GetCourseController } from "../modules/school/useCases/getCourseUseCase/GetCourseController";

const coursesRoutes = Router();
const createCourseController = new CreateCourseController();
const getCourseController = new GetCourseController();
coursesRoutes.post("/", ensureAuthenticated, createCourseController.handle);
coursesRoutes.get("/", getCourseController.handle);

export { coursesRoutes };
