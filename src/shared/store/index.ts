import { configureStore } from "@reduxjs/toolkit";
import { TimerReducer } from "../../widgets/TimerMain/model";
import { footerReducer } from "../../widgets/FooterMain/model";

export const store = configureStore({
    reducer: {
        TimerReducer,
        footerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;