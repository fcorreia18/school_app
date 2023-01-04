import { AppDataSource } from "../data-source";
import { School } from "../modules/school/entities/School";

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err: Error) => {
        console.error("Error during Data Source initialization", err);
    });
