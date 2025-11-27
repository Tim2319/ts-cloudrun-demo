import { Router, Request, Response } from "express"
import { getPricing, updatePricing } from "../services/pricingService"

const router = Router()

// GET /api/pricing
router.get("/", (req: Request, res: Response) => {
  const data = getPricing()
  res.json(data)
})

router.patch("/", (req: Request, res: Response) => {
  const body = req.body
  if (!body || typeof body !== "object") {
    return res
      .status(400)
      .json({ message: "Body 必須是 { material: price } 這種物件" });
  }
    for (const [key, value] of Object.entries(body)) {
        if (typeof value !== "number") {
          return res.status(400).json({
            message: `欄位 "${key}" 的價格必須是 number`,
          });
        }
      }

      const updated = updatePricing(body)
      res.json({
        message: "Pricing updated successfully",
        pricing: updated,
      })
    })


//POST /api/pricing {"steel": 300}
router.post("/", (req: Request, res: Response) => {
    const newPricing = req.body
    const updated = updatePricing(newPricing)

    res.json({
        message: "Pricing updated Successfully",
        pricing: updated
    })
})

export default router