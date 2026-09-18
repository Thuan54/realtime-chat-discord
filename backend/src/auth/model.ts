import pool from "../config/db.js";

export async function registerUser(name: string, hashedPassword: string){
    await pool.query(
        `INSERT INTO users(username, hashed_password)
         VALUES ($1, $2)`,
         [name, hashedPassword]
    )
}

export async function loginUser(name: string, hashed_password: string){
    const result = await pool.query(
        `SELECT 1
         FROM users
         WHERE username = $1 AND hashed_password=$2`,
         [name, hashed_password]
    )
    return result
}