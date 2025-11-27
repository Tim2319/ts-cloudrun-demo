import { Router, Request, Response } from "express"
import { getPricing, updatePricing } from "../services/pricingService"
import pricing from "../pricing.json"

const router = Router()

// GET /api/pricing
router.get("/", (req: Request, res: Response) => {
  res.json(pricing)
})

//POST /api/pricing {"steel": 300}
router.post("/", (req: Request, res: Response) => {
    const newPricing = req.body
    res.json({
        message: "Pricing updated Successfully",
        pricing: newPricing
    })
})

export default router