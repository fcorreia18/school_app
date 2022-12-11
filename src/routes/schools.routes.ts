import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateSchoolController } from "../modules/school/useCases/createSchoolUseCase/CreateSchoolController";

const schoolRoutes = Router();
const upload = multer(uploadConfig.upload("./tmp/schools_images"));
const createSchoolController = new CreateSchoolController();
schoolRoutes.post(
    "/",
    ensureAuthenticated,
    upload.array("images"),
    createSchoolController.handle
);

export { schoolRoutes };
