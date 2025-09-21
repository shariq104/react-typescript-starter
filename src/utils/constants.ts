// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

// App Configuration
export const APP_NAME = 'React TypeScript Boilerplate';
export const APP_VERSION = '1.0.0';

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  USER_PREFERENCES: 'userPreferences',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  USERS: '/users',
  AUTH: '/auth',
} as const;
