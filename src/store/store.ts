import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/users";
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumApi } from "../services/albums";

import albumReducer from './slices/albumSlice'
import { photoApi } from "../services/photos";

export const store = configureStore({
  reducer: {
    /** All reducer from services should be declared here to use RTK Query. */
    [userApi.reducerPath]: userApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    album: albumReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      albumApi.middleware,
      photoApi.middleware,
    ),
})


setupListeners(store.dispatch)