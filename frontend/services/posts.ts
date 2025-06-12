import strapiApi from './api';

export interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export const postsApi = {
  getAll: () => strapiApi.get<{ data: Post[] }>('/api/posts'),
  getById: (id: number) => strapiApi.get<{ data: Post }>(`/api/posts/${id}`),
  create: (data: Omit<Post['attributes'], 'createdAt' | 'updatedAt' | 'publishedAt'>) =>
    strapiApi.post<{ data: Post }>('/api/posts', { data }),
  update: (id: number, data: Partial<Post['attributes']>) =>
    strapiApi.put<{ data: Post }>(`/api/posts/${id}`, { data }),
  delete: (id: number) => strapiApi.delete(`/api/posts/${id}`),
}; 