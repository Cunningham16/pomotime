import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
    currentTime: number,
    roundTime: number,
    typeRound: 'work' | 'short break' | 'long break',
    isTimerStarted: boolean
}

const initialState: TimerState = {
    currentTime: 1500,
    roundTime: 25,
    typeRound: 'work',
    isTimerStarted: false,
}

const TimerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decreaseCurrentTime(state){
        state.currentTime = state.currentTime - 1
    },
    setTypeRound(state, action: PayloadAction<TimerState["typeRound"]>){
        state.typeRound = action.payload
        if(action.payload === 'work'){
            state.roundTime = 25
        }else if(action.payload === 'long break'){
            state.roundTime = 5
        }else if(action.payload === 'short break'){
            state.roundTime = 15
        }
        state.currentTime = state.roundTime * 60
    },
    setTimeStarted(state, action: PayloadAction<boolean>){
        state.isTimerStarted = action.payload
    },
  }
});

export const {decreaseCurrentTime, setTypeRound, setTimeStarted} = TimerSlice.actions

export const TimerReducer = TimerSlice.reducer