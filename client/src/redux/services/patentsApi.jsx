import { baseSplitApi } from './baseSplitApi';

export const patentsApi = baseSplitApi.injectEndpoints({
  endpoints: (build) => ({
    createPatent: build.mutation({
      query(data) {
        return {
          url: '/patents',
          method: 'POST',
          body: data,
        };
      },
    }),
    getMyPatents: build.query({
      query() {
        return {
          url: '/patents/user',
          method: 'GET',
        };
      },
    }),
    updatePatent: build.mutation({
      query({ id, data }) {
        return {
          url: `/patents/${id}`,
          method: 'PUT',
          body: data,
        };
      },
    }),
  }),
});

export const { useCreatePatentMutation, useGetMyPatentsQuery, useUpdatePatentMutation } =
  patentsApi;
