# QA Playwright Project
This repository contains automated UI tests for a critical E-commerce user journey using Playwright with Docker support.
The objective of this project is to protect revenue-critical flows (authentication and purchase intent) while maintaining fast, stable, and maintainable automation.
---

## 🔧 Tech Stack

- Playwright (UI Automation)
- TypeScript
- Node.js
- Docker
- Docker Compose

---

## 📌 Prerequisites

Make sure the following tools are installed:

- Node.js (v18+ recommended)
- npm
- Docker (optional, for containerized execution)

Check versions:

```bash
node -v
npm -v
docker -v
```
## 📦 Installation
Clone the repository:
```bash
git clone https://github.com/KaiwanGuyHiangha/qa-playwright.git
cd qa-playwright
```
Install dependencies:
```bash
npm install
```
Install Playwright browsers:
```bash
npx playwright install
```
## ▶️ Run Tests Locally
Run all tests:
```bash
npx playwright test
```
Run in headed mode:
```bash
npx playwright test --headed
```
Run specific test file:
```bash
npx playwright test tests/login.spec.ts
```
## 🐳 Run Tests with Docker
Build and run tests inside Docker:
```bash
cd docker
docker compose up --build
```
## 📊 Parallel Execution
Playwright runs tests in parallel by default.

To specify the number of workers:
```bash
npx playwright test --workers=4
```
Configuration can be adjusted in:
```bash
playwright.config.ts
```
## ✅ Automated Scenarios
- Login – happy path
- Login – invalid credentials
- Search and open product detail
- Add item to cart and verify:
  - Product name
  - Price
  - Quantity
- Cart persistence after page refresh

## 📁 Project Structure
```bash
qa-playwright/
│
├── tests/
│   ├── login.spec.ts
│   └── cart.spec.ts
│
├── playwright.config.ts
├── package.json
└── docker/
```

## 🎯 Automation Approach
- Focused on business-critical user journeys
- Prioritized stability over maximum coverage
- Designed selectors to reduce flakiness
- Ensured maintainability and readability

