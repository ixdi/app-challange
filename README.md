# Node Challenger

## Description

Given the instructions in the [challenge](./challenge.md).

## Setup

```bash
pnpm install
pnpm dev
```

This will start the frontend and backend servers concurrently.

## Tech Stack

The solution is writen in Typescript using

- Monorepo: Turborepo
- Frontend: Next.js
  - Styling: Tailwind CSS
  - Testing: Vitest
  - E2E Testing: Playwright
- Backend: Node.js
  - Database: MongoDB
  - Authentication: JWT
  - Testing: Vitest
  - E2E Testing: Cucumber

## Architecture

The architecture is a monorepo with the following structure:

- apps/ - Contains the frontend and backend applications
- packages/ - Contains shared code between the frontend and backend
- design/ - Contains the system description and design
- .husky/ - Contains the restrictions for the git
- .github: Contains the Github workflows

### Frontend

Use the Next.js framework with the following layers:

- Apps: Contains the pages of the application
- Components: Contains the reusable components
- Controllers: Contains the API services
- Stores: Contains the global state
- Utils: Contains the utility functions
- Styles: Contains the global styles
- Tests: Contains the tests
- E2E: Contains the e2e tests
- Mocks: Contains the mocks
- Config: Contains the configuration
- Public: Contains the public files

### Backend

Use the DDD pattern and CQRS with the following layers for each module:

- Server: Contains the server configuration
- Controllers: Contains the API routes
- Application: Contains the use cases
- Domain: Contains the entities and value objects
- Infrastructure: Contains the database and other external services

### Improvements

- Use buses for the commands and queries
- Increment the test coverage

## Thoughts

- The challenge was interesting althought I think that is too much for a technical interview if it has to be well done.
- There are other possible solutions like build the frontend using Vitest but Next.js has more easly productivity features.
