# News Feed

This repository contains a dynamic news feed application that retrieves articles from the [NEWSDATA.IO](https://newsdata.io/). Users can easily filter news by keyword or category, providing a customizable reading experience. Current version of the app is deployed here - [https://mashazyu.github.io/news-aggregator/](https://mashazyu.github.io/news-aggregator/).

## Key Features

- Real-time news retrieval from News API
- Keyword-based search functionality
- Category filtering options
- Testing

## Tech Stack

- [Vite](https://vitejs.dev/guide/) + JS + React + [shadcn/ui](https://ui.shadcn.com/) to present the information
- [TanStack Query](https://tanstack.com/query/latest) to pull the information from [News API](https://newsapi.org/docs/endpoints/top-headlines)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and @vitest/coverage-v8 for testing

## Current Status

This project is under development. Updates and improvements are being made to enhance functionality and user experience.

## Setup

To run app locally, please

1. Clone the current repo.
2. Generate an API key for [NEWSDATA.IO API](https://newsdata.io/api-key) and specify it the local .env file.
3. Run in your terminal

```
npm i
npm run dev
```

4. Navigate http://127.0.0.1:5173/ in your browser.

## Tests

To start tests locally, please run

```
npm run test
```

To check test coverage, please run

```
npm run test:coverage
```

## Deployment

The app is automatically deployed to GitHub Pages when changes are pushed to the main branch.
