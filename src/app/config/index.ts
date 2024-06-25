import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  Access_Token_Secret: process.env.JWT_ACCESS_SECRET,
  JWT_ACCESS_EXPIRE_IN: process.env.JWT_ACCESS_EXPIRE_IN,
};
