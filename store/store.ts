import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import foodReducer, { FoodState } from './foodSlice';

export interface RootState {
  food: FoodState;
}

export const makeStore = () => configureStore({
  reducer: {
    food: foodReducer,
  },
});

export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];

export const wrapper = createWrapper(makeStore);
