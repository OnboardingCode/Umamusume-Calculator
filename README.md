# Umamusume Calculator

This project is a web application built with React, TypeScript, and Vite, designed to display and manage information about characters from the Umamusume game. The application fetches real-time data from the Umapyoi API and presents it in a modern, responsive interface using TailwindCSS.

## Features

-  **Character Browser**: Browse and select from available Umamusume characters
-  **Detailed Character Information**: View character details including English/Japanese names, facts, and images
-  **API Integration**: Real-time data fetching from Umapyoi API
-  **Modern UI**: Responsive design with TailwindCSS
-  **Fast Navigation**: Client-side routing with React Router

## Project Structure

```
├── public/                # Public and static files
├── src/                   # Main source code
│   ├── App.tsx            # Main application component with routing
│   ├── main.tsx           # React entry point
│   ├── index.css          # Global styles (Tailwind)
│   ├── components/        # Reusable components
│   │   └── Navbar.tsx     # Navigation bar with links
│   ├── routes/            # Views and pages
│   │   ├── Home.tsx       # Home page
│   │   ├── CharactersCard.tsx # Character selection page
│   │   └── CharactersInfo.tsx # Character detail page
│   └── services/          # External services
│       └── api.ts         # API service for Umapyoi integration
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts configuration
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Documentation
```

## Application Flow

1. **Home Page** (`/`): Landing page with introduction
2. **Characters Page** (`/characters`): Selection of available characters
   - Currently features: Calstone Light O (ID: 10372) and Agnes Tachyon (ID: 5179)
3. **Character Info Page** (`/character?id=<character_id>`): Detailed character information
   - Displays English and Japanese names
   - Shows character facts (e.g., ear characteristics)
   - Renders character images

## Main Dependencies

- **React 19.2.0**: Library for building user interfaces
- **React DOM 19.2.0**: Rendering React components to the DOM
- **React Router 7.9.6**: Page navigation and routing
- **React Router DOM 7.9.6**: DOM bindings for React Router
- **TailwindCSS 4.1.17**: Utility-first CSS framework
- **@tailwindcss/vite 4.1.17**: Tailwind integration for Vite
- **Vite 7.2.4**: Fast development server and bundler

## Development Dependencies

- **TypeScript 5.9.3**: Static typing for JavaScript
- **ESLint 9.39.1**: Linter to maintain code quality
- **@vitejs/plugin-react-swc 4.2.2**: React optimization with SWC compiler
- **TypeScript ESLint 8.46.4**: ESLint rules for TypeScript
- **@types/react & @types/react-dom**: TypeScript type definitions

## Available Scripts

- **`npm run dev`**: Starts the development server with Vite
- **`npm run build`**: Compiles TypeScript and builds the project for production
- **`npm run lint`**: Runs ESLint to analyze and maintain code quality
- **`npm run preview`**: Previews the production build locally

## Requirements

- Node.js >= 18
- npm >= 9

## Installation and Usage

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd Umamusume-calculator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Access the application**:

   - Open your browser and navigate to `http://localhost:5173` (default Vite port)

5. **Build for production**:
   ```bash
   npm run build
   ```

## API Integration

The application integrates with the **Umapyoi API** to fetch character data:

- **Base URL**: `https://umapyoi.net/api/v1/character/{character_id}`
- **Service Location**: `src/services/api.ts`
- **Functions**:
  - `getCharacterData(umaId)`: Fetches character data from the API
  - `updateCharacterDOM(data)`: Updates the DOM with character information

### Character Data Retrieved:

- English name (`name_en`)
- Japanese name (`name_jp`)
- Character facts (`ears_fact`)
- Character images (`sns_icon`)

## Technical Highlights

### Routing

The application uses React Router for navigation:

- `/` - Home page
- `/characters` - Character selection page
- `/character?id=<id>` - Character detail page with query parameters

### State Management

- Uses React hooks (`useEffect`, `useNavigate`) for component lifecycle and navigation
- URL parameters for passing character IDs between pages

### Styling

- TailwindCSS utility classes for responsive design
- Custom color schemes (slate, blue, green, gray)
- Hover effects and smooth transitions

### Type Safety

- Full TypeScript implementation
- Type definitions for React and DOM operations
- Strict TypeScript configuration

## Code Quality

- ESLint configured with React-specific rules
- TypeScript strict mode enabled
- React hooks linting
- Consistent code formatting standards

## Browser Support

Modern browsers supporting ES6+ and React 19:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add more characters to the selection
- Implement search and filter functionality
- Add character comparison features
- Include performance statistics calculator
- Enhance UI with animations and transitions

## Notes

- The project follows a modular architecture for scalability and maintainability
- Components are organized by function (routes, components, services)
- Defensive programming practices implemented (null checks, error handling)
- API calls include proper error handling and logging

## Contributing

Contributions are welcome! Please ensure:

- Code follows the existing style guide
- ESLint passes without errors
- TypeScript types are properly defined
- Components are documented

---

**Developed by Codex Software**

