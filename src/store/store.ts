import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/users";
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumApi } from "../services/albums";


export const store = configureStore({
  reducer: {
    /** All reducer from services should be declared here to use RTK Query. */
    [userApi.reducerPath]: userApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      albumApi.middleware
    ),
})


setupListeners(store.dispatch)