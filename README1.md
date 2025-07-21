# UC Component Library Assignment 13

This project is a React component library with integrated code quality checks, CI/CD pipeline, and Docker containerization, built as part of Assignment 13.

## Features

- Production-ready React component library
- ESLint and Prettier integrated for code quality
- Pre-commit hooks using Husky and lint-staged
- Automated testing via Jest
- Dockerized build running on `localhost:8018`
- GitHub Actions workflow for CI

## Project Structure

## Project Structure

|
|-src/ #React components
|-.husky/ #Git hooks
|- Dockerfile # Docker configuration
|- package.json
|- README.md

## Setup Instructions

1.  **Install dependencies**

npm install

2.  **Initialize Husky**

npx husky install

( You may need to re-run npx husky add .husky/pre-commit "npx lint-staged" if it's missing.)

3.  **Run in development**

npm start

4.  **Run ESLint**

npm run lint

5.  **Run Prettier**

npm run format

6.  **Run Tests**

npm test

## Docker Instructions

1.  **Build Docker container**

docker build -t lastName_firstName_coding_assignment13 .

2. **Run container on port 8018**

docker run -d -p 8018:80 lastName_firstName_coding_assignment13

3. Visit http://localhost:8018 to see the deployed app.

## Testing Husky Pre-Commit Hook

Make a change to any _.ts, _.tsx file.

Stage the file: git add src/App.tsx

Try to commit: git commit -m "Testing Husky"

ESLint, Prettier, and npm run test:ci will run before commit.

## GitHub Actions CI

Runs on every push and pull request

Checks run:

1. ESLint
2. Prettier formatting
3. npm test

Workflow file location: .github/workflows/main.yml
