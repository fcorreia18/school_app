import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import path from "path";
import swaggerUI from "swagger-ui-express";

import "./database";
import "./shared/container";

import { AppError } from "./errors/AppError";
import { routes } from "./routes/index";
import swaggerFile from "./swagger.json";

const app: Application = express();

// middlewares
app.use(express.json());

app.use(cors());

app.use("/api/v1", routes);

// app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${error.message}`,
    });
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
// end middlewares

// sa
app.listen(8000, () => console.log("listening at port 8000"));
