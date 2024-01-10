import { createSlice } from '@reduxjs/toolkit'

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    deletedAlbums: new Array<number>()
  },
  reducers: {
    deleteAlbum: (state, action) => {
      state.deletedAlbums.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { deleteAlbum } = albumSlice.actions

export default albumSlice.reducer