# Login and Register with Auth (Client Side)

A frontend authentication client built with React + Vite.  
It provides registration and login screens and routes users to a home page after a successful login response.

## Features

- User registration form (`/register`)
- User login form (`/login`)
- Client-side navigation to `/home` after successful login
- Bootstrap-based UI styling
- Axios-based API calls to a local backend

## Tech Stack

### Core Dependencies

| Technology | Version |
| --- | --- |
| React | `^18.3.1` |
| React DOM | `^18.3.1` |
| React Router DOM | `^6.26.2` |
| Axios | `^1.7.7` |
| Bootstrap | `^5.3.3` |
| Vite | `^5.4.1` |

### Tooling

| Tool | Version |
| --- | --- |
| ESLint | `^9.9.0` |
| @vitejs/plugin-react | `^4.3.1` |

## Project Structure

```text
.
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Prerequisites

- Node.js (LTS recommended)
- npm
- A running backend API at `http://localhost:3001` (not included in this repository)

## Installation

```bash
npm install
```

## Available Commands

These commands match `package.json` scripts exactly:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Routes

| Route | Component | Purpose |
| --- | --- | --- |
| `/register` | `Signup` | User registration form |
| `/login` | `Login` | User login form |
| `/home` | `Home` | Post-login destination page |

## Backend/API Integration Notes

This frontend currently uses hardcoded API URLs in source code:

- `POST http://localhost:3001/register` in `src/Signup.jsx`
- `POST http://localhost:3001/login` in `src/Login.jsx`

On login, the app navigates to `/home` only when the response body is exactly `"success"`.

## Current Limitations / Future Improvements

- API base URL is hardcoded instead of using environment variables.
- No client-side auth persistence/guarding is implemented yet.
- Basic error handling can be expanded for better UX.

## Author

- [oma452](https://github.com/oma452)
