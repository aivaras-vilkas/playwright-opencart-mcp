# Playwright OpenCart Automation

Starter automation repository for the OpenCart demo store: https://demo.opencart.com/en-gb?route=common/home

## What is included
- Playwright + TypeScript setup
- Cross-browser configuration for Chromium, Firefox, and WebKit
- Page Object Model examples for homepage, login, and shopping cart
- Starter test coverage for navigation, search, login, and cart flows
- HTML report generation via Playwright

## Setup
Install dependencies:
```bash
npm install
```
Install Playwright browsers:
```bash
npm run install:browser
```

## Running tests
Run the complete suite:
```bash
npm test
```
Run tests in headed mode:
```bash
npm run test:headed
```
View the HTML report after execution:
```bash
npm run test:report
```

## Configuration
The default `BASE_URL` is `https://demo.opencart.com`.
Override it by setting `BASE_URL` in a `.env` file or your environment.

## Project structure
- `pages/` — page object classes
- `tests/` — Playwright test files
- `playwright.config.ts` — test runner configuration

## Notes
This repository is now prepared for beginning OpenCart demo automation with a simple POM structure and starter tests.
