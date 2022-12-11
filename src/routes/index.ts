import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { schoolRoutes } from "./schools.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/schools", schoolRoutes);
routes.use(authenticateRoutes);

export { routes };
