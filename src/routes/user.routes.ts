import express, { Request, Response } from "express";
const router = express.Router();

// GET /users
router.get("/", (req: Request, res: Response) => {
  // getUsers()
  res.send("Users are there");
});

router.post("/auth/login", (req: Request, res: Response) => {
  // Login()
  res.send("It's Login time");
});

router.get("/auth/signup", (req: Request, res: Response) => {
  // Signup()
  res.send("It's Signup time");
});

export default router;
