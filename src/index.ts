import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import User from "./routes/user.routes";
import Session from "./routes/session.routes";

const API_VERSION = "v1";
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Ressources
app.use(`/${API_VERSION}/users`, User);
app.use(`/${API_VERSION}/sessions`, Session);
