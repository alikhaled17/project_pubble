import { configureStore } from "@reduxjs/toolkit";
import PageReducers from "./reducers/page-reducer/index";

export const store = configureStore({
  reducer: {
    // ...appSettingsReducers,
    ...PageReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
