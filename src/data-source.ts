import path from "path";
import { DataSource } from "typeorm";

import { AppError } from "./errors/AppError";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const remotePostgresDataSource = new DataSource({
    type: "postgres",
    url: "postgresql://postgres:wIHk3VJbuTsZoWY8@db.lwzxkuswkejydxyuhoxc.supabase.co:5432/postgres",
    entities: [
        `${
            path.extname(path.basename(__filename)) === ".ts"
                ? `${__dirname}/modules/**/entities/*.ts`
                : `./build/modules/**/entitieqs/*.js`
        }`,
    ],
    // migrations: ["./src/database/migrations/*.ts"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const localPostgresDataSource = new DataSource({
    type: "postgres",
    host: "database_school_app",
    database: "school_app",
    username: "docker",
    password: "school_app",
    entities: [
        `${
            path.extname(path.basename(__filename)) === ".ts"
                ? `./src/modules/**/entities/*.ts`
                : `./build/modules/**/entities/*.js`
        }`,
    ],
    migrations: ["./src/database/migrations/*.ts"],
});

export const AppDataSource = remotePostgresDataSource;

AppDataSource.initialize()
    .then(async () => {
        console.log("database started");
    })
    .catch((error) => {
        try {
            console.log("SSSSSSS");
        } catch (err) {
            throw new AppError(error, 5000);
        }
    });
