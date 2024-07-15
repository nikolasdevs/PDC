

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/userSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
