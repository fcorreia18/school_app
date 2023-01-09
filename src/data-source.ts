import { DataSource } from "typeorm";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const remotePostgresDataSource = new DataSource({
    type: "postgres",
    // url: "postgresql://postgres:YRycfuMzCKiKC8gX@db.nddaeuebmqjyqwdwcylk.supabase.co:5432/postgres",
    url: "postgresql://postgres:hICGIMZilyBYJWuM@db.wjodjswssezcujmuwqwm.supabase.co:5432/postgres",
    entities: [`${__dirname}/modules/**/entities/*.ts`],
    migrations: ["./src/database/migrations/*.ts"],
});

const localPostgresDataSource = new DataSource({
    type: "postgres",
    host: "database_school_app",
    database: "school_app",
    username: "docker",
    password: "school_app",
    entities: [`./src/modules/**/entities/*.ts`],
    migrations: ["./src/database/migrations/*.ts"],
});
export const AppDataSource = localPostgresDataSource;

AppDataSource.initialize()
    .then(async () => {
        console.log("database started");
    })
    .catch((error) => console.log(error));
