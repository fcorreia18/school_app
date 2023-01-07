import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { degreeRoutes } from "./degree.routes";
import { schoolRoutes } from "./schools.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/schools", schoolRoutes);
routes.use("/degrees", degreeRoutes);
routes.use(authenticateRoutes);

export { routes };
