import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './notes/notesSlice';
import colorSlice from './color/colorSlice';

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    color: colorSlice,
  },
});
