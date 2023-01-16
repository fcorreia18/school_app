import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateCourseController } from "../modules/school/useCases/createCourseUseCase/CreateCourseController";
import { GetCourseController } from "../modules/school/useCases/getCourseUseCase/GetCourseController";
import { UpdateCourseController } from "../modules/school/useCases/updateCourseUseCase/UpdateCourseController";

const coursesRoutes = Router();
const createCourseController = new CreateCourseController();
const updateCourseController = new UpdateCourseController();
const getCourseController = new GetCourseController();
coursesRoutes.post("/", ensureAuthenticated, createCourseController.handle);
coursesRoutes.put("/:id", ensureAuthenticated, updateCourseController.handle);
coursesRoutes.get("/", getCourseController.handle);

export { coursesRoutes };
