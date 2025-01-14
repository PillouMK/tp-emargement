import dotenv from "dotenv";

dotenv.config({ path: `.env` });

export const {
  MYSQL_ALLOW_EMPTY_PASSWORD,
  MYSQL_HOST,
  MYSQL_ROOT_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = { ...process.env } as { [key: string]: string };
