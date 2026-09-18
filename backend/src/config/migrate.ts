import { runner } from "node-pg-migrate";
import pool from "./db.js";

async function migrate() {
  try {
    await runner({
      dbClient: pool,
      dir: "../migrations",
      direction: "up",
      migrationsTable: "pgmigrations",
      verbose: true,
    });

    console.log("Migrations completed");
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
