# TestMu SDET Assignment - Pranjal Sinha

[![Regression Suite](https://github.com/TryHardPranjal/testmu-sdet2-pranjal/actions/workflows/regression.yml/badge.svg)](https://github.com/TryHardPranjal/testmu-sdet2-pranjal/actions/workflows/regression.yml)

---

## Project Overview

This project implements a scalable and maintainable Playwright + TypeScript automation framework following Page Object Model (POM), API abstraction, reusable fixtures, and CI/CD best practices.

Framework covers:

- UI Automation
- API Automation
- Integration Testing
- Cross-browser execution
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
├── sample-output/
├── .github/workflows/
├── playwright.config.ts
├── .env.example
└── README.md
```

---

## Prerequisites

Ensure the following are installed before running the framework:

- NodeJS (v18 or above recommended)
- npm (comes with NodeJS)
- Git
- Visual Studio Code (optional)

Verify installation:

```bash
node -v
npm -v
git --version
```

---

## Clone Repository

```bash
git clone https://github.com/TryHardPranjal/testmu-sdet2-pranjal.git

cd testmu-sdet2-pranjal
```

---

## Setup Instructions

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Install browser dependencies (if required)

```bash
npx playwright install-deps
```

---

### Configure Environment Variables

Create a `.env` file or copy from `.env.example`

```bash
cp .env.example .env
```

Example:

```text
BASE_URL=https://example.com
USERNAME=testuser
PASSWORD=testpassword
API_BASE_URL=https://api.example.com
```

Update values according to target environment.

---

## Verify Setup

Run a basic execution:

```bash
npx playwright test
```

Expected:

- Browser launches successfully
- Tests execute successfully
- Reports generated
- Screenshots/videos captured on failures

---

## Execute Tests

Run complete suite:

```bash
npm run test
```

Run UI suite:

```bash
npm run test:ui
```

Run API suite:

```bash
npm run test:api
```

Run Integration suite:

```bash
npm run test:integration
```

Run headed execution:

```bash
npm run test:ui -- --headed
```

Run a specific test:

```bash
npx playwright test tests/ui/login.spec.ts
```

Run with specific browser:

```bash
npx playwright test --project=chromium
```

---

## Reporting

### Playwright HTML Report

```bash
npx playwright show-report
```

### Allure Report

Generate report:

```bash
npm run allure:generate
```

Open report:

```bash
npm run allure:open
```

Failure artifacts include:

- Screenshots
- Video recording
- Execution trace
- Framework logs

---

## Sample Outputs

Generated artifacts include:

- Playwright HTML report
- Allure report
- Failure screenshots
- Failure videos
- Execution traces

Sample outputs available under:

```text
sample-output/
```

---

## Features Implemented

### UI Automation

- Login validation
- Dashboard interaction
- Form validation
- Cart workflow
- Cross-browser execution

### API Automation

- CRUD operations
- Authentication flow
- Error handling
- Response validation
- Response time assertions
- Schema validation

### Integration Testing

- Combined API and UI workflow execution

### CI/CD

- GitHub Actions workflow
- Push trigger execution
- Pull request execution
- Manual workflow execution
- Parallel execution using sharding
- Artifact publishing

---

## Design Decisions

### Why Page Object Model (POM)

- Reduces selector duplication
- Improves maintainability
- Separates page logic from test logic

### Why Playwright

- Supports UI and API testing in one framework
- Built-in parallel execution
- Cross-browser support
- Strong reporting capabilities

### Why GitHub Actions

- Native GitHub integration
- Faster feedback during pull requests
- Easy artifact publishing

---

## Why CI/CD Option Was Selected

GitHub Actions was selected instead of a reporting dashboard because:

- Continuous execution gives faster feedback
- Fits regression workflow
- Easier pull request integration
- Supports artifact publishing and parallel execution

---

## CI/CD Notification Strategy

Selected approach:

- GitHub repository email notifications
- Workflow execution status via GitHub Actions

Reason:

GitHub-native notifications provide immediate feedback with minimal setup and lower maintenance overhead.

---

## Troubleshooting

### Windows

Clear dependencies and reinstall:

```bash
rmdir /s /q node_modules
del package-lock.json

npm install
```

### Linux / macOS

```bash
rm -rf node_modules package-lock.json

npm install
```

Reinstall Playwright browsers:

```bash
npx playwright install --force
```

---

## Future Improvements

Given additional time:

- Docker containerization
- Accessibility testing
- Visual regression testing
- Dynamic environment management
- Dashboard-based analytics
- Slack notification integration

---

## Author

Pranjal Sinha