# TestMu SDET Assignment - Pranjal Sinha

## Project Overview

This project implements a scalable Playwright + TypeScript automation framework following Page Object Model (POM), API abstraction, reusable fixtures, and CI/CD practices.

Framework covers:

- UI Automation
- API Automation
- Integration Testing
- Reporting
- GitHub Actions CI/CD
- Environment configuration
- Reusable utilities

---

## Tech Stack

- Playwright
- TypeScript
- NodeJS
- Allure Reporting
- GitHub Actions
- AJV Schema Validation
- Winston Logger

---

## Framework Structure

```text
project-root/

├── api/
├── pages/
├── fixtures/
├── tests/
│   ├── ui/
│   ├── api/
│   └── integration/
├── utils/
├── config/
├── test-data/
├── .github/workflows/
├── playwright.config.ts
└── README.md
```

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright:

```bash
npx playwright install
```

---

## Execute Tests

Run complete suite:

```bash
npm run test
```

Run UI:

```bash
npm run test:ui
```

Run API:

```bash
npm run test:api
```

Run Integration:

```bash
npm run test:integration
```

Run headed:

```bash
npm run test:ui -- --headed
```

---

## Reporting

HTML report:

```bash
npx playwright show-report
```

Allure:

```bash
npm run allure:generate
npm run allure:open
```

---

## Features Implemented

### UI

- Login validation
- Dashboard validation
- Cart workflow

### API

- CRUD operations
- Authentication flow
- Error handling
- Response validation
- Performance assertions

### Integration

- API + UI combined workflow

### CI/CD

- GitHub Actions
- Parallel execution
- Artifact upload

---

## Author

Pranjal Sinha