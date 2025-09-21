[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# React TypeScript Boilerplate

A modern, scalable React application boilerplate built with TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast development and build tool
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Full type safety and excellent IDE support
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Client-side routing
- 🔄 **React Query** - Powerful data fetching and caching
- 🧪 **Vitest** - Fast unit testing framework
- 📦 **ESLint & Prettier** - Code quality and formatting
- 🎯 **Path Mapping** - Clean imports with TypeScript path mapping
- 🔧 **Husky** - Git hooks for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   └── Layout/         # Layout components (Header, Footer, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions and constants
├── types/              # TypeScript type definitions
├── services/           # API services and external integrations
├── assets/             # Static assets (images, icons, etc.)
└── test/               # Test files and setup
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shariq104/react-typescript-starter.git
cd react-typescript-starter
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3001/api
VITE_APP_NAME=React TypeScript Boilerplate
VITE_APP_VERSION=1.0.0
```

### Path Mapping

The project uses TypeScript path mapping for clean imports:

```typescript
import { Button } from '@components/ui';
import { useLocalStorage } from '@hooks';
import { formatDate } from '@utils';
```

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing component structure
- Use functional components with hooks
- Implement proper error boundaries
- Write tests for new components

### Component Structure

```typescript
// Component file structure
interface ComponentProps {
  // Props interface
}

export const Component = ({ prop }: ComponentProps) => {
  // Component logic
  return (
    // JSX
  );
};
```

### API Integration

Use the provided `apiService` for all API calls:

```typescript
import { apiService } from '@services';

const fetchUsers = async () => {
  const response = await apiService.get<User[]>('/users');
  return response.data;
};
```

## Testing

The project uses Vitest for testing. Write tests in the `src/test` directory or alongside your components.

```typescript
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Environment Setup

Make sure to set the appropriate environment variables for your production environment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
