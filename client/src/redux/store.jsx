import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseSplitApi } from './services/baseSplitApi';

export const store = configureStore({
  reducer: {
    [baseSplitApi.reducerPath]: baseSplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseSplitApi.middleware),
});

setupListeners(store.dispatch);
