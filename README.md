# TestMu SDET Assignment - Pranjal Sinha

## Project Overview

This project implements a scalable Playwright + TypeScript automation framework following Page Object Model (POM), API abstraction, reusable fixtures, and CI/CD practices.

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
└── README.md
```

---

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

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

Playwright HTML report:

```bash
npx playwright show-report
```

Allure:

```bash
npm run allure:generate
npm run allure:open
```

Failure artifacts include:

- Screenshots
- Video recording
- Execution trace
- Framework logs

---

## Features Implemented

### UI

- Login validation
- Dashboard interaction
- Form validation
- Cart workflow
- Cross-browser execution

### API

- CRUD operations
- Authentication flow
- Error handling
- Response validation
- Response time assertions
- Schema validation

### Integration

- Combined API and UI workflow execution

### CI/CD

- GitHub Actions pipeline
- Push trigger
- Pull request trigger
- Manual execution
- Parallel execution using sharding
- Artifact publishing

---

## Design Decisions

### Why Page Object Model (POM)

- Reduced selector duplication
- Improved maintainability
- Better separation between test logic and page logic

### Why Playwright

- UI and API support in one framework
- Built-in parallel execution
- Cross-browser support
- Strong reporting capabilities

### Why GitHub Actions

- Native GitHub integration
- Fast feedback on pull requests
- Easy artifact publishing

---

## Why CI/CD Option Was Selected

GitHub Actions was selected instead of a reporting dashboard because:

- Continuous execution gives faster feedback
- Fits regression workflow
- Easier integration with pull requests
- Supports parallel execution and artifact publishing

---

## CI/CD Notification Strategy

Notification approach selected:

- GitHub repository email notifications
- Workflow execution status visible in GitHub Actions

Reason:

GitHub-native notifications were selected over external integrations because they provide immediate feedback with minimal configuration and lower maintenance overhead.

---

## Future Improvements

Given additional time:

- Docker containerization
- Accessibility testing
- Visual regression testing
- Dynamic environment management
- Dashboard-based test analytics
- Slack notification integration

---

## Author

Pranjal Sinha