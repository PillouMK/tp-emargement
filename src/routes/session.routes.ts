import express, { Request, Response } from "express";
const router = express.Router();

// GET /sessions
router.get("/", (req: Request, res: Response) => {
  // getSessions()
  res.send("Sessions are there");
});

router.get("/:id", (req: Request, res: Response) => {
  // getSessionByID()
  res.send("Session by id there");
});

router.post("/", (req: Request, res: Response) => {
  // createSession()
  res.send("Create session");
});

router.put("/:id", (req: Request, res: Response) => {
  // updateSessionByID()
  res.send("It's PUT time");
});

router.delete("/:id", (req: Request, res: Response) => {
  // deleteSessionByID()
  res.send("It's Delete time");
});

// GET /:id/emargement
router.get("/:id/emargement", (req: Request, res: Response) => {
  // getEmargementBySessionID()
  res.send("Emargements by session ID are there");
});

router.post("/:id/emargement", (req: Request, res: Response) => {
  // createEmargement()
  res.send("Create emargement for session");
});

export default router;
