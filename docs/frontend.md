# Frontend Documentation - AlloBoulot Client

## Overview
AlloBoulot's frontend is a modern React application built with TypeScript and Vite, providing a responsive and interactive user interface for job seekers and employers.

## Tech Stack
- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Query Management**: TanStack Query (via request directory)
- **State Management**: Zustand (via store directory)
- **Validations**: Zod (via schema directory)
- **Styling**: TailwindCSS

## Project Structure
```
client/AlloBoulot/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # State management
│   ├── types/            # TypeScript definitions
│   ├── schemas/          # Validation schemas
│   ├── request/          # API request handlers
│   ├── lib/              # Utility functions
│   └── assets/           # Static assets
├── public/               # Public assets
└── vite.config.ts        # Vite configuration
```

## Key Components
1. **Pages**
   - Home page
   - Job listings
   - Company profiles
   - User dashboard
   - Application management

2. **Components**
   - Navigation
   - Job cards
   - Search filters
   - Forms
   - Modal dialogs

3. **Hooks**
   - Data fetching
   - Form handling
   - Authentication
   - UI state management

## State Management
- Zustand store configuration
- Action creators
- Reducers
- Selectors

## API Integration
- RESTful API consumption
- Request handling
- Response parsing
- Error management

## Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Configuration
- Environment variables in `.env`
- TypeScript configuration in `tsconfig.json`
- Vite configuration in `vite.config.ts`

## Type System
- TypeScript interfaces for API responses
- Component prop types
- State types
- Form validation schemas

## Testing
- Unit testing setup
- Component testing
- Integration testing
- Run tests:
  ```bash
  npm test
  ```

## Code Style
- TypeScript strict mode
- Prettier formatting

## Build and Deploy
1. Production build:
   ```bash
   npm run build
   ```
2. Preview build:
   ```bash
   npm run preview
   ```

## Performance Optimization
- Code splitting
- Lazy loading
- Image optimization
- Bundle size optimization

## Browser Support
- Modern browsers
- Polyfills for older browsers
- Responsive design considerations

## Security
- HTTPS enforcement
- XSS prevention
- CSRF protection
- Input validation