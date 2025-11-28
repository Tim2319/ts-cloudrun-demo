# Cloud Run Pricing & Stripe Demo

A small backend service built with **TypeScript + Node.js + Express** that:

- Exposes a **/api/pricing** endpoint for dynamic material pricing
- Integrates **Stripe Checkout** for payments
- Is deployed on **Google Cloud Run** with environment variables and HTTPS
- Provides simple health check & demo materials API

This project is designed as a **template for real-world freelancing tasks** like:
- Fixing / rebuilding a Node.js backend
- Adding editable pricing logic
- Integrating Stripe for payments
- Deploying to Cloud Run and wiring env vars correctly

---

## Tech Stack

- Node.js (TypeScript)
- Express
- Stripe (Checkout Session)
- Google Cloud Run
- Postman (API testing)

---

## Features

- `GET /health` – health check endpoint
- `GET /api/materials` – demo materials list (fake data)
- `GET /api/pricing` – return current pricing config (from JSON)
- `POST /api/pricing` – update pricing (in-memory / JSON based)
- `POST /api/stripe/checkout` – create Stripe Checkout Session (test mode)

All endpoints are available both **locally** and on **Cloud Run**.

---

## Getting Started

### 1. Clone & install

```
git clone https://github.com/<your-name>/ts-cloudrun-demo.git
cd ts-cloudrun-demo
npm install
```

### 2. Environment variables

Create a .env file (or set env vars in Cloud Run):

```
STRIPE_SECRET_KEY=sk_test_xxx
PRICE_CONFIG_PATH=./pricing.json
PORT=3000
```

### 3. Local development

npm run dev

```
# http://localhost:3000/health
# http://localhost:3000/api/pricing
# http://localhost:3000/api/materials
```

### 4. Build & start (production mode)

```
npm run build
npm start
```

---

## Deployment (Google Cloud Run)

### 1. Install gcloud CLI and login:

```
gcloud auth login
gcloud config set project <YOUR_PROJECT_ID>
```

### 2.Deploy to Cloud Run:

```
gcloud run deploy ts-cloudrun-demo \
  --source . \
  --allow-unauthenticated \
  --platform managed \
  --region asia-east1
```

### 3.After deployment, set environment variables in the Cloud Run console

After deployment, set environment variables in the Cloud Run console
