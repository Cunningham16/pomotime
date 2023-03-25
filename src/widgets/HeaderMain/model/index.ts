import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenSidebar: false
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleSidebar(state){
        state.isOpenSidebar = !state.isOpenSidebar
    }
  }
});

export const { toggleSidebar } = headerSlice.actions;

export const headerReducer = headerSlice.reducer