import { Router } from "express";
import multer from "multer";

import uploadAvatar from "../config/upload";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";

const uploadCategories = multer(uploadAvatar.upload("./tmp"));
const categoryRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.post(
    "/import",
    uploadCategories.single("file"),
    importCategoryController.handle
);

export { categoryRoutes };
