# Junior Developer Exam

## Getting Started

1. Make sure you have Node.js and npm (or yarn) installed.
2. Clone the repository: `git clone https://github.com/lis10590/paygilant-exam-ts.git`
3. Navigate to the project directory: `cd paygilant-exam-ts`
4. Install dependencies: `npm install` or `yarn install`

## Usage

1. **Run the project:**

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Main page - The list of posts is displayed with a searchbar
- Post page - Individual post page with its comments
- Components folder - Contains some components like Card, SearchBar,NewPost moadl,comments and etc.
- Loading and error handling is made mainly by built-in Next.js pages (loading.tsx, error.tsx)

## Comments

1. For routing I used the built-in Next.js router (doesn't require a package like in simple react)
2. For adding a post I used a local state management because the api can't be updated,
   so also I preffered using simple fetch api instead of Tanstack query because there is no data mutation in this case.
3. I deployed the project on vercel https://paygilant-exam-ts.vercel.app/
