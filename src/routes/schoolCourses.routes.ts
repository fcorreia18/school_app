import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateSchoolCourseController } from "../modules/school/useCases/createSchoolCourseUseCase/CreateSchoolCourseController";
import { GetSchoolsCoursesController } from "../modules/school/useCases/getSchoolCourseUseCase/getSchoolCourseController";

const schoolCoursesRoutes = Router();
const createSchoolCouseController = new CreateSchoolCourseController();
const getSchoolsCourseController = new GetSchoolsCoursesController();
schoolCoursesRoutes.post(
    "/",
    ensureAuthenticated,
    createSchoolCouseController.handle
);
schoolCoursesRoutes.get("/", getSchoolsCourseController.handle);

export { schoolCoursesRoutes };
