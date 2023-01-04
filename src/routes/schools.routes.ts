import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateSchoolController } from "../modules/school/useCases/createSchoolUseCase/CreateSchoolController";
import { GetSchoolsController } from "../modules/school/useCases/getSchoolUseCase/GetSchoolsController";

const schoolRoutes = Router();
const upload = multer(uploadConfig.upload("./tmp/schools_images"));
const createSchoolController = new CreateSchoolController();
const getSchoolsController = new GetSchoolsController();
schoolRoutes.post(
    "/",
    ensureAuthenticated,
    upload.array("images"),
    createSchoolController.handle
);
schoolRoutes.get("/", getSchoolsController.handle);

export { schoolRoutes };
