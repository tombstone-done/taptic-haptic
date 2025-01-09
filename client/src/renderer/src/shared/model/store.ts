import { configureStore } from '@reduxjs/toolkit';
import { microcontrollerSlice } from './slices/microcontrollerSlice';

export const store = configureStore({
  reducer: {
    microcontroller: microcontrollerSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
