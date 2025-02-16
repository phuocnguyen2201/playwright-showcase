# App Testing with Playwright

##Overview
Demonstrate simple automated test cases for some apps. This repo contains simple test suite for a Todo application, a MFA application, a Web application using Playwright.

##Installation
1. Clone the repository:
    git clone https://github.com/phuocnguyen2201/playwright-showcase

    init the npm:
    npm init playwright@latest

    some other packages:
    npm install @axe-core/playwright otplib

##Run the test

    In the terminal, run command below for all the tests:

    npx playwright test

    To run specific a test file:

    npx playwright test tests/filename.spec.ts

##Folder structure
```
project-root/
├── resrouces/                      # Contains all resources
│   ├── locator.js/                 # locators file
├── tests/                          # Contains all test suite
│   ├── test-1.spec.ts              # todo test suite
│   ├── test-2.spec.ts              # MFA test suite
│   ├── test-3.spec.ts              # Accessibility test suite
│   └── test-4.spec.ts              # Vehicle Insurance test suite
├── README.md                       # Documentation for the project
```
