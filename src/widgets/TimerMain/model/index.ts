import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
    currentTime: number,
    roundTime: number,
    typeRound: 'WORK' | 'SHORT BREAK' | 'LONG BREAK',
    isTimerStarted: boolean
}

const initialState: TimerState = {
  currentTime: 1500,
  roundTime: 25,
  typeRound: "WORK",
  isTimerStarted: false,
};

const TimerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decreaseCurrentTime(state){
        state.currentTime = state.currentTime - 1
    },
    setTypeRound(state, action: PayloadAction<TimerState["typeRound"]>){
        state.typeRound = action.payload
        if (action.payload === "WORK") {
          state.roundTime = 25;
        } else if (action.payload === "LONG BREAK") {
          state.roundTime = 5;
        } else if (action.payload === "SHORT BREAK") {
          state.roundTime = 15;
        }
        state.currentTime = state.roundTime * 60
    },
    toggleTimeStarted(state){
        state.isTimerStarted = !state.isTimerStarted;
    },
  }
});

export const {decreaseCurrentTime, setTypeRound, toggleTimeStarted} = TimerSlice.actions

export const TimerReducer = TimerSlice.reducer