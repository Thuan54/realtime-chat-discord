import { MigrationBuilder } from 'node-pg-migrate';

export const up = (pgm: MigrationBuilder) => {
  pgm.sql(`
    CREATE TABLE users (
      username VARCHAR(255) NOT NULL UNIQUE,
      hashed_password TEXT NOT NULL
    );
  `);
};

export const down = (pgm: MigrationBuilder) => {
  pgm.sql(`
    DROP TABLE users;
  `);
};
