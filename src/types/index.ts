// Common types used across the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ErrorResponse {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Form types
export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

// Theme types
export type Theme = 'light' | 'dark';

// API status types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
