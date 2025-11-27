// src/routes/materials.ts
import { Router, Request, Response } from "express";
import { listMaterialImages } from "../services/storageService";

const router = Router();

router.get("/images", async (req: Request, res: Response) => {
  try {
    const files = await listMaterialImages();
    res.json({ files });
  } catch (err) {
    console.error("List images error:", err);
    res.status(500).json({ message: "Failed to list images" });
  }
});

export default router;
