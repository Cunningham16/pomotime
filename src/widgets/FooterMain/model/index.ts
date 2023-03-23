import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentRounds: 1,
    allRounds: 4,
}

const FooterSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {
    addRound(state){
        state.currentRounds = state.currentRounds + 1
    },
    clearRounds(state){
        state.currentRounds = 1
    }
  }
});

export const { addRound, clearRounds } = FooterSlice.actions;

export const footerReducer = FooterSlice.reducer