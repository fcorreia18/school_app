import "reflect-metadata";
import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(routes);
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "im in" });
});
app.listen(8000, () => console.log("listening at port 8000"));

// import path from 'path'
// import cors from 'cors';
// import 'express-async-errors'
// import './database/connection';
// import route from './routes';
// import errorHandler from './error/handler'

// const app: Application = express();

// app.use(express.json());
// app.use(route);
// app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
// app.use(errorHandler)
// app.use(cors)
