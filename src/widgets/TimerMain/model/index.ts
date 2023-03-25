import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
    currentTime: number,
    roundTime: number,
    typeRound: 'WORK' | 'SHORT BREAK' | 'LONG BREAK',
    isTimerStarted: boolean,
    workTime: number,
    shortBreakTime: number,
    longBreakTime: number
}

const initialState: TimerState = {
  currentTime: 1500,
  roundTime: 25,
  typeRound: "WORK",
  isTimerStarted: false,
  workTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15
};

const TimerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    decreaseCurrentTime(state) {
      state.currentTime = state.currentTime - 1;
    },
    setTypeRound(state, action: PayloadAction<TimerState["typeRound"]>) {
      state.typeRound = action.payload;
      if (action.payload === "WORK") {
        state.roundTime = state.workTime;
      } else if (action.payload === "SHORT BREAK") {
        state.roundTime = state.shortBreakTime;
      } else if (action.payload === "LONG BREAK") {
        state.roundTime = state.longBreakTime;
      }
      state.currentTime = state.roundTime * 60;
    },
    toggleTimeStarted(state) {
      state.isTimerStarted = !state.isTimerStarted;
    },
    setTimeStop(state) {
      state.isTimerStarted = false;
    },
    changeWorkTime(state, action: PayloadAction<number>) {
      state.workTime = action.payload;
      if (state.typeRound === "WORK") {
        state.roundTime = action.payload;
        state.currentTime = action.payload * 60;
        state.isTimerStarted = false;
      }
    },
    changeShortBreakTime(state, action: PayloadAction<number>) {
      state.shortBreakTime = action.payload;
      if (state.typeRound === "SHORT BREAK") {
        state.roundTime = action.payload;
        state.currentTime = action.payload * 60;
        state.isTimerStarted = false;
      }
    },
    changeLongBreakTime(state, action: PayloadAction<number>) {
      state.longBreakTime = action.payload;
      if (state.typeRound === "LONG BREAK") {
        state.roundTime = action.payload;
        state.currentTime = action.payload * 60;
        state.isTimerStarted = false;
      }
    },
  },
});

export const {
  decreaseCurrentTime,
  setTypeRound,
  toggleTimeStarted,
  setTimeStop,
  changeWorkTime,
  changeShortBreakTime,
  changeLongBreakTime,
} = TimerSlice.actions;

export const TimerReducer = TimerSlice.reducer