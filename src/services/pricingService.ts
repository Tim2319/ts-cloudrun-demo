import fs from "fs"
import path from "path"

const pricingPath = path.join(process.cwd(), "src", "pricing.json")

export const getPricing = () => {
    const data = fs.readFileSync(pricingPath, "utf-8")
    return JSON.parse(data)
}

export const updatePricing = (newPricing: any) => {
    fs.writeFileSync(pricingPath, JSON.stringify(newPricing, null, 2))
    return newPricing
}