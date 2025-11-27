import express, { Request, Response } from "express"
import pricingRouter from "./routes/pricing"

const app = express()
const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.json())
app.use("/api/pricing", pricingRouter)

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
    ]
    res.json(materials)
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})