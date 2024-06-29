import { baseSplitApi } from './baseSplitApi';

export const patentsApi = baseSplitApi.injectEndpoints({
  endpoints: (build) => ({
    getPatents: build.query({
      query() {
        return {
          url: '/admin/patents',
          method: 'GET',
        };
      },
    }),
    rejectedPatent: build.mutation({
      query(id) {
        return {
          url: `/admin/rejectPatent/${id}`,
          method: 'POST',
        };
      },
    }),
    approvePatent: build.mutation({
      query(id) {
        return {
          url: `/admin/approvePatent/${id}`,
          method: 'POST',
        };
      },
    }),
  }),
});

export const {
  useGetPatentsQuery,
  useRejectedPatentMutation,
  useApprovePatentMutation,
} = patentsApi;
