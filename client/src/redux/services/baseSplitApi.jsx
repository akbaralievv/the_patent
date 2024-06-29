import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const base_url = import.meta.env.VITE_BASE_URL;

export const baseSplitApi = createApi({
  reducerPath: 'baseSplitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      headers.set('Content-Type', 'application/json');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
