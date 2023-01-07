import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { coursesRoutes } from "./courses.routes";
import { degreeRoutes } from "./degrees.routes";
import { schoolRoutes } from "./schools.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/schools", schoolRoutes);
routes.use("/degrees", degreeRoutes);
routes.use("/courses", coursesRoutes);
routes.use(authenticateRoutes);

export { routes };
