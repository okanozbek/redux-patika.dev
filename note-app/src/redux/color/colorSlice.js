import { createSlice } from '@reduxjs/toolkit';

export const colorSlice = createSlice({
  name: 'color',
  initialState: {
    colors: [
      {
        id: 1,
        code: '#FF65E3',
        selected: true,
      },
      {
        id: 2,
        code: '#FFE898',
        selected: false,
      },
      {
        id: 3,
        code: '#3FA796',
        selected: false,
      },
      {
        id: 4,
        code: '#654213',
        selected: false,
      },
      {
        id: 5,
        code: '#EEEEEE',
        selected: false,
      },
      {
        id: 6,
        code: '#1CD6CE',
        selected: false,
      },
      {
        id: 7,
        code: '#C1D5A4',
        selected: false,
      },
      {
        id: 8,
        code: '#A10035',
        selected: false,
      },
      {
        id: 9,
        code: '#E8F9FD',
        selected: false,
      },
      {
        id: 10,
        code: '#2C3333',
        selected: false,
      },
    ],
  },
  reducers: {
    selectColor: (state, action) => {
      state.colors.forEach((color) => {
        color.selected = false;
      });
      const selectedColor = state.colors.find(
        (color) => color.code === action.payload
      );
      selectedColor.selected = true;
    },
  },
});

export const { selectColor } = colorSlice.actions;
export default colorSlice.reducer;
