import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/users'
import { Endpoints } from '../constants/endpoints'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => Endpoints.Users,
    })
  })
})


export const {
  useGetUsersQuery
} = userApi