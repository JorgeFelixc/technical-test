import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/users";
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
    /** All reducer from services should be declared here to use RTK Query. */
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})


setupListeners(store.dispatch)