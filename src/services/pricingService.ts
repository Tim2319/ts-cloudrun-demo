import pricingFromFile from "../pricing.json";

export type Pricing = Record<string, number>;

// 先把 JSON 當成初始值，放進一個可變的變數
let currentPricing: Pricing = { ...pricingFromFile };

export function getPricing(): Pricing {
  return currentPricing;
}

export function updatePricing(partial: Partial<Pricing>): Pricing {
  // 合併新的價格進來（例如只傳 steel，就更新 steel）
  currentPricing = {
    ...currentPricing,
    ...partial,
  } as Pricing
  
  return currentPricing;
}
