# Framework Architecture

## Technology Selection

### Playwright + TypeScript

Chosen because:

- UI and API support in one framework
- Parallel execution
- Built-in reporting
- Cross-browser capability
- Strong TypeScript support

---

## Framework Design

Pattern used:

Page Object Model (POM)

Structure:

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

Purpose:

- Separate business logic from tests
- Improve maintainability
- Encourage reuse

---

## Key Components

### BasePage

Responsibilities:

- Navigation
- Click actions
- Fill actions
- Wait handling

---

### Fixtures

Responsibilities:

- Page initialization
- Shared setup
- Dependency injection

---

### Utilities

Responsibilities:

- Logging
- Assertions
- Wait handling
- Retry support

---

## Reporting Strategy

Implemented:

- Playwright HTML reports
- Allure reporting
- Screenshots on failure
- Video retention
- Trace collection
- Framework logs

---

## CI/CD Design

GitHub Actions:

- Manual execution
- PR validation
- Parallel execution
- Artifact upload

---