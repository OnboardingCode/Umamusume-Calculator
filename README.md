
# Umamusume Calculator

This project is a web application built with React, TypeScript, and Vite, designed to calculate and display information related to characters from the Umamusume game. It uses TailwindCSS for modern and responsive styling.

## Project Structure

```
├── public/                # Public and static files
├── src/                   # Main source code
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # React entry point
│   ├── index.css          # Global styles (Tailwind)
│   ├── components/        # Reusable components
│   │   └── Navbar.tsx     # Navigation bar
│   └── routes/            # Views and pages
│       ├── Home.tsx       # Home page
│       └── CharactersCard.tsx # Characters page
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts configuration
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Documentation
```

## Main Dependencies

- **React**: Library for building user interfaces.
- **React DOM**: Rendering React components to the DOM.
- **React Router DOM**: Page navigation.
- **TailwindCSS**: Utility-first CSS framework.
- **Vite**: Fast development server and bundler.

## Development Dependencies

- **TypeScript**: Static typing for JavaScript.
- **ESLint**: Linter to maintain code quality.
- **@vitejs/plugin-react-swc**: React optimization with SWC.

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Runs ESLint to analyze the code.
- `preview`: Previews the production build.

## Requirements

- Node.js >= 18
- npm >= 9

## Installation and Usage

1. Install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run dev
	```
3. Access the app at `http://localhost:5173` (default).

## Notes

- The project is structured for scalability and maintainability.
- Styles are managed with TailwindCSS and can be customized in `index.css`.
- Navigation is handled with React Router.

---
Developed by Codex Software.
