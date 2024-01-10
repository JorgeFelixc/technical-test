import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/users'
import { Endpoints } from '../constants/endpoints'
import { Album } from '../types/album'
import { Photo } from '../types/photo'

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: builder => ({
    getPhotoByAlbumId: builder.query<Photo[], string>({
      /** For purpose of this gonna use replace but URLSearchParameters would better. */
      query: (albumId) => Endpoints.PhotoByAlbum.replace(':id', albumId)
    }),
    getPhotos: builder.query<Photo[], void>({
      query: () => Endpoints.Photos,
    }),
    getPhotosBuilder: builder.query<Photo[], string | undefined>({
      query: (albumId) => {
        /** Toggle to change to all photos if not passing albumId */
        if (!albumId) {
          return Endpoints.Photos
        }
        return Endpoints.PhotoByAlbum.replace(':id', albumId)
      },
    })
  })
})


export const {
  useGetPhotoByAlbumIdQuery,
  useGetPhotosQuery,
  useLazyGetPhotosQuery,
  useGetPhotosBuilderQuery
} = photoApi
