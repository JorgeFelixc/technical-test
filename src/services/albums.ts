import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/users'
import { Endpoints } from '../constants/endpoints'
import { Album } from '../types/album'

export const albumApi = createApi({
  reducerPath: 'albumApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: builder => ({
    getAlbumByUser: builder.query<Album[], string>({
      /** For purpose of this gonna use replace but URLSearchParameters would better. */
      query: (id) => Endpoints.AlbumByUser.replace(':id', id),
    })
  })
})


export const {
  useGetAlbumByUserQuery
} = albumApi