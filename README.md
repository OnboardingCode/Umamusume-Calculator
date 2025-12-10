# Umamusume Calculator

This project is a web application built with React, TypeScript, and Vite, designed to display and manage information about characters from the Umamusume game. The application fetches real-time data from the Umapyoi API and presents it in a modern, responsive interface using TailwindCSS.

## Features

- ✅ **Character Browser**: Browse and select from available Umamusume characters
- ✅ **Detailed Character Information**: View character details including:
  - English and Japanese names
  - Character facts (ear characteristics, trivia)
  - SNS icon/profile image
  - **Outfit Gallery**: Display character outfits organized by categories (Uniform, Racewear, Concept Art, etc.)
- ✅ **Dual API Integration**:
  - Character data from Umapyoi API (`/api/v1/character/{id}`)
  - Outfit images from Umapyoi API (`/api/v1/character/images/{id}`)
- ✅ **Modern UI**: Fully responsive design with TailwindCSS
- ✅ **Fast Navigation**: Client-side routing with React Router
- ✅ **TypeScript**: Full type safety with interfaces and type definitions
- ✅ **Dynamic URL Parameters**: Character selection via query parameters

## Project Structure

```
├── public/                # Public and static files
│   └── outfits/           # Outfit images (if local storage needed)
├── src/                   # Main source code
│   ├── App.tsx            # Main application component with routing
│   ├── main.tsx           # React entry point
│   ├── index.css          # Global styles (Tailwind)
│   ├── components/        # Reusable components
│   │   └── Navbar.tsx     # Navigation bar with links to Home and Characters
│   ├── routes/            # Views and pages
│   │   ├── Home.tsx       # Home/landing page
│   │   ├── CharactersCard.tsx # Character selection page
│   │   └── CharactersInfo.tsx # Character detail page with outfit gallery
│   └── services/          # External services and API integration
│       └── info_api.ts    # API service for Umapyoi integration
│                          # - Character data fetching
│                          # - Outfit images fetching
│                          # - DOM manipulation utilities
│                          # - TypeScript interfaces
├── API_outfit.md          # Complete API documentation for outfit endpoints
├── index.html             # Main HTML file
├── package.json           # Dependencies and scripts configuration
├── tsconfig*.json         # TypeScript configuration files
├── vite.config.ts         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## Application Flow

1. **Home Page** (`/`): Landing page with introduction
2. **Characters Page** (`/characters`): Selection of available characters
   - Currently features:
     - Calstone Light O (Game ID: 1120)
     - Agnes Tachyon (Game ID: 1032)
     - Agnes Digital (Game ID: 1019)
   - Each character button navigates to their detail page with their specific ID
3. **Character Info Page** (`/character?id=<game_id>`): Detailed character information
   - **General Information Section**:
     - English name (`name_en`)
     - Japanese name (`name_jp`)
     - Character facts/trivia (`ears_fact`)
     - SNS icon/profile image (`sns_icon`)
   - **Outfit Gallery Section**:
     - Displays first 3 outfit categories (Uniform, Racewear, Concept Art)
     - Shows the most recent image from each category
     - Images are lazy-loaded for performance
     - Each outfit has alt text and title for accessibility

## API Integration Details

### Character Data API

- **Endpoint**: `https://umapyoi.net/api/v1/character/{game_id}`
- **Method**: GET
- **Returns**: Character basic information (names, facts, images)
- **Function**: `getCharacterData(umaId: string)`

### Character Outfits API

- **Endpoint**: `https://umapyoi.net/api/v1/character/images/{game_id}`
- **Method**: GET
- **Returns**: Array of outfit categories with multiple images per category
- **Function**: `getCharacterOutfits(umaId: string): Promise<OutfitCategory[]>`
- **Documentation**: See `API_outfit.md` for complete API documentation

### TypeScript Interfaces

```typescript
// Character basic data
interface CharacterData {
  name_en: string;
  name_jp: string;
  sns_icon: string;
  ears_fact: string;
}

// Outfit image structure
interface OutfitImage {
  image: string; // URL of the image
  uploaded: string; // Upload date (YYYY-MM-DD)
}

// Outfit category structure
interface OutfitCategory {
  images: OutfitImage[];
  label: string; // Japanese label
  label_en: string; // English label
}
```

## Main Dependencies

- **React 19.2.0**: Library for building user interfaces
- **React DOM 19.2.0**: Rendering React components to the DOM
- **React Router 7.9.6**: Page navigation and routing
- **React Router DOM 7.9.6**: DOM bindings for React Router
- **TailwindCSS 4.1.17**: Utility-first CSS framework for styling
- **@tailwindcss/vite 4.1.17**: Tailwind integration for Vite
- **Vite 7.2.4**: Fast development server and bundler

## Development Dependencies

- **TypeScript 5.9.3**: Static typing for JavaScript
- **ESLint 9.39.1**: Linter to maintain code quality
- **@vitejs/plugin-react-swc 4.2.2**: React optimization with SWC compiler
- **TypeScript ESLint 8.46.4**: ESLint rules for TypeScript
- **@types/react & @types/react-dom**: TypeScript type definitions
- **@types/node 24.10.1**: Node.js type definitions
- **ESLint Plugin React Hooks**: Enforce React Hooks rules
- **Globals 16.5.0**: Global identifiers for ESLint

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

## Key Components & Services

### Components

#### `Navbar.tsx`

- Fixed navigation bar at the top of all pages
- Links to Home and Characters pages
- Styled with TailwindCSS (dark theme with hover effects)
- Responsive design

#### `CharactersCard.tsx`

- Displays available characters as interactive cards/buttons
- Each button navigates to character detail page with query parameter
- Currently features 3 characters:
  - Calstone Light O (ID: 1120)
  - Agnes Tachyon (ID: 1032)
  - Agnes Digital (ID: 1019)

#### `CharactersInfo.tsx`

- Dynamic character detail page
- Fetches data based on URL query parameter (`?id=`)
- Displays two main sections:
  1. **General Information**: Names, facts, profile image
  2. **Outfit Gallery**: First 3 outfit categories with images
- Includes back button to return to character selection

### Services

#### `info_api.ts`

Contains all API integration functions:

1. **`getCharacterData(umaId: string)`**

   - Fetches basic character information
   - Endpoint: `/api/v1/character/{id}`
   - Returns: Character names, facts, and profile image

2. **`getCharacterOutfits(umaId: string): Promise<OutfitCategory[]>`**

   - Fetches character outfit images
   - Endpoint: `/api/v1/character/images/{id}`
   - Returns: Array of outfit categories with multiple images

3. **`updateCharacterDOM(data: CharacterData)`**

   - Updates DOM elements with character data
   - Uses defensive programming (null checks)
   - Updates: names, facts, and profile image

4. **`updateOutfitsDOM(outfits: OutfitCategory[])`**
   - Updates DOM with outfit images
   - Displays first 3 categories
   - Uses most recent image from each category
   - Adds alt text and titles for accessibility

### TypeScript Interfaces

The project uses strong typing throughout:

- `CharacterData`: Basic character information
- `OutfitImage`: Individual outfit image with upload date
- `OutfitCategory`: Outfit category with multiple images and labels

## Technical Highlights

### Routing

The application uses React Router for navigation:

- `/` - Home page
- `/characters` - Character selection page
- `/character?id=<id>` - Character detail page with dynamic query parameters

### State Management

- Uses React hooks (`useEffect`, `useNavigate`) for component lifecycle and navigation
- URL search parameters (`URLSearchParams`) for passing character IDs between pages
- Default fallback ID (10372) if no parameter is provided

### API Architecture

- **Dual API Integration**: Parallel fetching of character data and outfit images
- **Promise-based**: Uses `.then()/.catch()` for async operations
- **Error Handling**: Comprehensive error catching and logging
- **Type Safety**: Full TypeScript interfaces for API responses

### Styling

- **TailwindCSS** utility classes for responsive design
- Custom color schemes (slate, blue, green, gray, red)
- Hover effects and smooth transitions (duration-300)
- Shadow and rounded corners for modern appearance
- Lazy loading for images to improve performance
- Fixed navbar with responsive layout

### Performance Optimizations

- Image lazy loading with `loading="lazy"` attribute
- Crisp image rendering with `image-rendering: crisp-edges`
- Component-based architecture for code reusability
- Vite's fast Hot Module Replacement (HMR)
- SWC compiler for faster builds

### Type Safety

- Full TypeScript implementation across all files
- Custom interfaces for API responses (`CharacterData`, `OutfitCategory`, `OutfitImage`)
- Type-safe DOM manipulation with type guards (`instanceof HTMLImageElement`)
- Strict TypeScript configuration
- Type definitions for all dependencies

### Code Quality & Best Practices

- **ESLint** configured with React-specific rules
- **Defensive Programming**: Null checks before DOM manipulation
- **Separation of Concerns**: Services layer separate from components
- **Reusable Components**: Modular component structure
- **Documentation**: Inline comments explaining code functionality
- **API Documentation**: Dedicated `API_outfit.md` file with complete examples

## Additional Resources

- **API Documentation**: See `API_outfit.md` for detailed information about the outfit images API
- **Umapyoi API**: Base URL - `https://umapyoi.net/api/v1/`
- **Repository**: [OnboardingCode/Umamusume-Calculator](https://github.com/OnboardingCode/Umamusume-Calculator)

## Future Enhancements

Potential features for future development:

- Add more characters to the selection
- Implement outfit category filtering
- Add character statistics and abilities
- Create a favorites/bookmarks system
- Implement search functionality
- Add animations and transitions
- Support for multiple languages
- Character comparison feature

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts` or kill the process using port 5173
2. **API errors**: Check console logs for specific error messages from the Umapyoi API
3. **Images not loading**: Verify the character ID is valid and the API is accessible
4. **TypeScript errors**: Run `npm run lint` to check for type issues


## License

This project is for educational purposes. Umamusume is a trademark of Cygames, Inc.



## Future Enhancements

- TBA


**Developed by Codex Software**
