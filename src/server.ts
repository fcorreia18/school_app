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
