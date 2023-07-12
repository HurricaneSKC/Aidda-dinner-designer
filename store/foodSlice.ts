import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface FoodItem {
  id: string;
  name: string;
}

export interface FoodState {
  items: FoodItem[];
}

const initialState: FoodState = {
  items: [],
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({ id: uuidv4(), name: action.payload });
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action: PayloadAction<FoodItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = foodSlice.actions;

export default foodSlice.reducer;
