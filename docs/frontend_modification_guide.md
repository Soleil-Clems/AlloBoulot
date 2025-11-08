# Frontend Modification Guide - AlloBoulot

## Table of Contents
1. [Pages](#pages)
2. [Requests](#requests)
3. [Schemas](#schemas)
4. [Store](#store)
5. [Components](#components)

## Pages

### Creating a New Page

1. **Basic Page Structure**
```tsx
// src/pages/NewPage.tsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const NewPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <h1>New Page</h1>
      {/* Your page content */}
    </div>
  );
};

export default NewPage;
```

2. **Adding Route**
```tsx
// Update your routing configuration to include the new page
<Route path="/new-path" element={<NewPage />} />
```

3. **Page with Data Fetching**
```tsx
// Example with data fetching
import { useQuery } from '@tanstack/react-query';
import { yourRequest } from '../request/yourRequest';

const DataPage: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['your-data'],
    queryFn: yourRequest.getData
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* Render your data */}
    </div>
  );
};
```

## Requests

### Creating New API Requests

1. **Request Structure**
```typescript
// src/request/newRequest.ts
import { customAxios } from '../lib/customaxios';
import type { YourDataType } from '../types/your.types';

export const newRequest = {
  // GET request
  getData: async (): Promise<YourDataType[]> => {
    const { data } = await customAxios.get('/api/endpoint');
    return data;
  },

  // POST request
  createData: async (payload: YourDataType): Promise<YourDataType> => {
    const { data } = await customAxios.post('/api/endpoint', payload);
    return data;
  },

  // PUT request
  updateData: async (id: string, payload: Partial<YourDataType>): Promise<YourDataType> => {
    const { data } = await customAxios.put(`/api/endpoint/${id}`, payload);
    return data;
  },

  // DELETE request
  deleteData: async (id: string): Promise<void> => {
    await customAxios.delete(`/api/endpoint/${id}`);
  }
};
```

2. **Error Handling**
```typescript
// Add error handling to requests
try {
  const response = await customAxios.get('/api/endpoint');
  return response.data;
} catch (error) {
  if (error.response?.status === 404) {
    throw new Error('Resource not found');
  }
  throw new Error('An error occurred');
}
```

## Schemas

### Creating Validation Schemas

1. **Basic Schema Structure**
```typescript
// src/schemas/newSchema.ts
import { z } from 'zod';

export const newSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  status: z.enum(['active', 'inactive']),
  createdAt: z.date().optional()
});

export type NewSchemaType = z.infer<typeof newSchema>;
```

2. **Form Integration**
```typescript
// Using schema with react-hook-form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newSchema, NewSchemaType } from '../schemas/newSchema';

const YourForm = () => {
  const form = useForm<NewSchemaType>({
    resolver: zodResolver(newSchema)
  });

  // Form implementation
};
```

## Store

### Creating/Modifying Store

1. **Store Structure**
```typescript
// src/store/newStore.ts
import { create } from 'zustand';

interface NewStore {
  data: DataType[];
  loading: boolean;
  error: string | null;
  setData: (data: DataType[]) => void;
  addItem: (item: DataType) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, updates: Partial<DataType>) => void;
}

export const useNewStore = create<NewStore>((set) => ({
  data: [],
  loading: false,
  error: null,
  setData: (data) => set({ data }),
  addItem: (item) => set((state) => ({ 
    data: [...state.data, item] 
  })),
  removeItem: (id) => set((state) => ({ 
    data: state.data.filter(item => item.id !== id) 
  })),
  updateItem: (id, updates) => set((state) => ({
    data: state.data.map(item => 
      item.id === id ? { ...item, ...updates } : item
    )
  }))
}));
```

2. **Using Store in Components**
```typescript
const YourComponent: React.FC = () => {
  const { data, addItem, removeItem } = useNewStore();

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {/* Item content */}
          <button onClick={() => removeItem(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
```

## Components

### Creating Reusable Components

1. **Atomic Design Structure**
```typescript
// src/components/atoms/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

2. **Form Components**
```typescript
// src/components/form/InputField.tsx
interface InputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  register: any; // from react-hook-form
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  error,
  register
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className={`input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};
```

## HTTP Client Configuration (customaxios)

### Overview
The `customaxios` is a configured Axios instance that handles API requests with automatic authentication and error handling. It's located in `src/lib/customaxios.ts`.

### Features

1. **Base Configuration**
```typescript
import axios from "axios"
import { authStore } from "@/store/auth.store"
import { apiUrl } from "@/constant"

export const customaxios = axios.create({
  baseURL: apiUrl,
})
```

2. **Request Interceptor**
- Automatically adds authentication token
- Handles content type for different request types
```typescript
customaxios.interceptors.request.use((config) => {
  // Add Bearer token if available
  const { accessToken } = authStore.getState()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  // Handle content type
  if (!(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json"
  }

  return config
})
```

3. **Response Interceptor**
- Handles authentication errors (401, 403)
- Automatic logout on authentication failure
```typescript
customaxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { logout } = authStore.getState()

    if (error.response) {
      const status = error.response.status
      if (status === 401 || status === 403) {
        logout()
        window.location.href = "/"
      }
    }
    return Promise.reject(error)
  }
)
```

### Usage Examples

1. **Basic Request**
```typescript
import { customaxios } from '@/lib/customaxios';

// GET request
const getData = async () => {
  const response = await customaxios.get('/api/endpoint');
  return response.data;
};

// POST request with JSON data
const createData = async (data: any) => {
  const response = await customaxios.post('/api/endpoint', data);
  return response.data;
};
```

2. **File Upload**
```typescript
const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await customaxios.post('/api/upload', formData);
  return response.data;
};
```

3. **Error Handling**
```typescript
try {
  const response = await customaxios.get('/api/protected-endpoint');
  return response.data;
} catch (error) {
  // Network errors
  if (!error.response) {
    console.error('Network error:', error.message);
    throw new Error('Network error occurred');
  }
  
  // API errors
  const status = error.response.status;
  switch (status) {
    case 400:
      throw new Error('Invalid request');
    case 404:
      throw new Error('Resource not found');
    case 500:
      throw new Error('Server error');
    default:
      throw new Error('An unexpected error occurred');
  }
}
```

### Best Practices

1. **Type Safety**
```typescript
interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

const fetchData = async <T>(): Promise<T> => {
  const response = await customaxios.get<ApiResponse<T>>('/api/endpoint');
  return response.data.data;
};
```

2. **Request Timeout**
```typescript
const longRequest = async () => {
  const response = await customaxios.get('/api/long-operation', {
    timeout: 10000 // 10 seconds
  });
  return response.data;
};
```

3. **Custom Headers**
```typescript
const requestWithHeaders = async () => {
  const response = await customaxios.get('/api/endpoint', {
    headers: {
      'Custom-Header': 'value'
    }
  });
  return response.data;
};
```

### Security Considerations

1. **CSRF Protection**
```typescript
customaxios.defaults.xsrfCookieName = 'XSRF-TOKEN';
customaxios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
```

2. **Request Validation**
```typescript
const validateRequest = (data: unknown) => {
  // Add your validation logic here
  if (!data) throw new Error('Invalid request data');
  return data;
};

const safeRequest = async (data: unknown) => {
  const validatedData = validateRequest(data);
  const response = await customaxios.post('/api/endpoint', validatedData);
  return response.data;
};
```

## Best Practices

### 1. Type Safety
- Always define TypeScript interfaces/types
- Use proper type annotations
- Avoid using `any`

### 2. Component Organization
- Follow atomic design principles
- Keep components small and focused
- Use proper file naming conventions

### 3. State Management
- Use local state for component-specific data
- Use Zustand store for shared state
- Implement proper state updates

### 4. Performance
- Implement proper memoization
- Use React.memo for expensive renders
- Optimize re-renders

### 5. Error Handling
- Implement proper error boundaries
- Handle API errors gracefully
- Show user-friendly error messages

## Testing

### Component Testing
```typescript
// src/components/__tests__/YourComponent.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YourComponent from '../YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    render(<YourComponent />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('New State')).toBeInTheDocument();
  });
});
```

## Example Workflow

1. **Planning**
   - Define requirements
   - Plan component structure
   - Design data flow

2. **Implementation**
   - Create/modify components
   - Implement business logic
   - Add styling

3. **Testing**
   - Write unit tests
   - Test user flows
   - Perform performance checks

4. **Documentation**
   - Update component documentation
   - Document props and types
   - Add usage examples

## Common Pitfalls to Avoid
1. Not handling loading/error states
2. Improper type definitions
3. Poor state management
4. Missing error boundaries
5. Inadequate form validation
6. Not following component hierarchy
7. Unnecessary re-renders