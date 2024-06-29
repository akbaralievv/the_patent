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
    getUsers: build.query({
      query() {
        return {
          url: '/admin/users',
          method: 'GET',
        };
      },
    }),
    deleteUser: build.mutation({
      query(id) {
        return {
          url: `/admin/deleteUserAndPatents/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
} = userApi;
