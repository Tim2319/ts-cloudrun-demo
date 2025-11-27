import { Router, Request, Response } from "express";
import { createCheckoutSession } from "../services/stripeService";

const router = Router();

// POST /api/checkout/session
router.post("/session", async (req: Request, res: Response) => {
  try {
    // 之後可以從 req.body 讀要買什麼，先忽略
    const session = await createCheckoutSession();

    res.json({
      id: session.id,
      url: session.url, // 前端拿到這個 url 直接 redirect
    });
  } catch (err: any) {
    console.error("Stripe error:", err);
    res.status(500).json({ message: "Failed to create checkout session" });
  }
});

export default router;
