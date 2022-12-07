import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoryRoutes } from "./category.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/users", userRoutes);
routes.use(authenticateRoutes);

export { routes };
// const upload = multer(uploadConfig);
// route.get('/list-orphanages', OrphanagesController.index);
// route.get('/orphanage/:id', OrphanagesController.show);
// route.post('/create-orphanage', upload.array('images'), OrphanagesController.create);
