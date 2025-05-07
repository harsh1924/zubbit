import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";

import * as dotenv from "dotenv"

dotenv.config({
    path: ".env.local"
})

if (!process.env.DATABASE_URL)
    throw new Error("Database url is not set in .env.local file");

async function runMigrations() {
    console.log("🔄 Starting database migration...");
    try {
        // Create a Neon SQL connection
        const sql = neon(process.env.DATABASE_URL!);

        // Initialize Drizzle with the connection
        const db = drizzle(sql);

        // Run migrations from the drizzle folder
        console.log("📂 Running migrations from ./drizzle folder");
        await migrate(db, { migrationsFolder: "./drizzle" })
        console.log("Database migrations are successfully done!");

    } catch (error) {
        console.log("Something went wrong during migrations", error);
        process.exit(1);
    }
}

runMigrations();