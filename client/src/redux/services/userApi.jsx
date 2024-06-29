import { baseSplitApi } from './baseSplitApi';

export const userApi = baseSplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query(data) {
        return {
          url: '/users/login',
          method: 'POST',
          body: data,
        };
      },
    }),
    register: build.mutation({
      query(data) {
        return {
          url: '/users/register',
          method: 'POST',
          body: data,
        };
      },
    }),
    getUser: build.query({
      query() {
        return {
          url: '/users/me',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } = userApi;
