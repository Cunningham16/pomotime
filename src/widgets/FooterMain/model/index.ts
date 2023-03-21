import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentRounds: 0,
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
        state.currentRounds = 0
    }
  }
});

export const {} = FooterSlice.actions

export const footerReducer = FooterSlice.reducer