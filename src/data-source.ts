import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgresql://postgres:YRycfuMzCKiKC8gX@db.nddaeuebmqjyqwdwcylk.supabase.co:5432/postgres",
    entities: [`${__dirname}/modules/**/entities/*.ts`],
    migrations: ["./src/database/migrations/*.ts"],
});

console.log(`${__dirname}/modules/**/entities/*.ts`);
