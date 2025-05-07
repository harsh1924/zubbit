import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

import * as dotenv from "dotenv"

dotenv.config({
    path: ".env.local"
})

if (!process.env.DATABASE_URL)
    throw new Error("Database url is not set in .env.local file");

async function runMigrations() {
    try {
        const sql = neon(process.env.DATABASE_URL!);
        const db = drizzle(sql);

        await migrate(db, { migrationsFolder: "./drizzle" })
        console.log("All Migrations are successfully done!");

    } catch (error) {
        console.log("Something went wrong during migrations");
        process.exit(1);
    }
}

runMigrations();