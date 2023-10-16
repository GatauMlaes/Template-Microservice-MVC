import path from "path";
import url from "url";
import dotenv from "dotenv";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const env = dotenv.config({path : path.join(__dirname,'..','.env')});
const uri = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`;
const env_Config = {
    uri,
    host : process.env.HOST || "localhost",
    port : process.env.PORT || "3200",
    log_level : process.env.LOG_LEVEL || "info",
    __dirname,
    salt:parseInt(process.env.SALT_LEVEL),
    name_ms : process.env.NAME_MS
};

export default env_Config;