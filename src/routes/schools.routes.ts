import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthentication";
import { CreateSchoolController } from "../modules/school/useCases/createSchoolUseCase/CreateSchoolController";
import { GetSchoolByParamsController } from "../modules/school/useCases/getSchoolUseCase/GetSchoolByParamsController";
import { GetSchoolsController } from "../modules/school/useCases/getSchoolUseCase/GetSchoolsController";
import { UpdateSchoolController } from "../modules/school/useCases/updateSchoolUseCase/UpdateSchoolController";

const schoolRoutes = Router();
const upload = multer(uploadConfig.upload("./tmp/schools_images"));
const createSchoolController = new CreateSchoolController();
const updateSchoolController = new UpdateSchoolController();
const getSchoolsController = new GetSchoolsController();
const getSchoolsByParamsController = new GetSchoolByParamsController();
schoolRoutes.post(
    "/",
    ensureAuthenticated,
    upload.array("images"),
    createSchoolController.handle
);
schoolRoutes.put(
    "/:id",
    ensureAuthenticated,
    upload.array("images"),
    updateSchoolController.handle
);
schoolRoutes.get("/", getSchoolsController.handle);
schoolRoutes.get(
    "/filter/:province?/:degree?/:course?",
    getSchoolsByParamsController.handle
);

export { schoolRoutes };
