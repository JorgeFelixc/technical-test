import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/users'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: builder => ({
    getUsers: builder.query<User, void>({
      query: () => 'users',
    })
  })
})


export const {
  useGetUsersQuery
} = userApi