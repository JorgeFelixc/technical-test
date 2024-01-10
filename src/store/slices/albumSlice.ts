import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Album } from '../../types/album'

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    deletedAlbums: {} as Record<string, number[]>
  },
  reducers: {
    deleteAlbum: (state, { payload }: PayloadAction<Album>) => {
      const { userId, id } = payload;
      const deletedUserAlbum = state.deletedAlbums[userId];
      if (!deletedUserAlbum) {
        state.deletedAlbums[userId] = [id]
        return;
      }
      deletedUserAlbum.push(id)
    }
  },
  selectors: {
    selectDeletedAlbumsByUserId: (state, userId) => state.deletedAlbums[userId]
  }
})

// Action creators are generated for each case reducer function
export const { deleteAlbum } = albumSlice.actions

export const { selectDeletedAlbumsByUserId } = albumSlice.selectors

export default albumSlice.reducer