import dotenv from "dotenv";

dotenv.config({path: '.env'})

export default {
    port : process.env.PORT || '3000',
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    },
    secret: process.env.SECRET,
    environment: process.env.NODE_ENV || 'development',
}