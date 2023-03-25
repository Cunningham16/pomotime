import { configureStore } from "@reduxjs/toolkit";
import { TimerReducer } from "../../widgets/TimerMain/model";
import { footerReducer } from "../../widgets/FooterMain/model";
import { headerReducer } from "widgets/HeaderMain/model";

export const store = configureStore({
    reducer: {
        headerReducer,
        TimerReducer,
        footerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;