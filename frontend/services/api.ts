import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication if needed
api.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const strapiApi = {
  // Generic GET request
  get: async <T>(endpoint: string) => {
    const response = await api.get<T>(endpoint);
    return response.data;
  },

  // Generic POST request
  post: async <T>(endpoint: string, data: any) => {
    const response = await api.post<T>(endpoint, data);
    return response.data;
  },

  // Generic PUT request
  put: async <T>(endpoint: string, data: any) => {
    const response = await api.put<T>(endpoint, data);
    return response.data;
  },

  // Generic DELETE request
  delete: async <T>(endpoint: string) => {
    const response = await api.delete<T>(endpoint);
    return response.data;
  },
};

export default strapiApi; 