//Loading variables from .env file
import "dotenv/config";

//Pool manages connection from database to application
import { Pool } from "pg";

const connection = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),//Converting String to Number using TS
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default connection;