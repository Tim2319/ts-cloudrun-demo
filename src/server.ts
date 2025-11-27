import "dotenv/config"
import express, { Request, Response } from "express"
import pricingRouter from "./routes/pricing"
import checkoutRouter from "./routes/checkout"
import materialRouter from "./routes/material"

const app = express()
const PORT = process.env.PORT || 8080

//Middlewares
app.use(express.json())

//material
app.use("/api/materials", materialRouter)

//pricing 
app.use("/api/pricing", pricingRouter)

//checkout
app.use("/api/checkout", checkoutRouter)

//Health check 
app.get("/health", (req: Request, res:Response) => {
    res.json({ status:"ok", timestamp: new Date().toISOString() })
})

//Example API
app.get("/api/materials", (req:Request, res: Response) => {
    //fake data
    const materials = [
        { id:1, name: "Concrete", price: 100 },
        { id:2, name: "Steel", price: 200 },
        { id:3, name: "Wood", price: 150 }
    ]
    res.json(materials)
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})