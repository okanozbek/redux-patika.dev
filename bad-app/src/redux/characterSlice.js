import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const char_limit = 12;
export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (page) => {
    const res = await axios(
      `${
        process.env.REACT_APP_API_BASE_ENDPOINT
      }/characters?limit=${char_limit}&offset=${page * char_limit}`
    );
    return res.data;
  }
);

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    page: 0,
    nextHasPage: true,
    status: 'idle',
    error: null,
  },
  reducer: {},
  extraReducers: {
    [fetchCharacters.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = 'succeeded';
      state.page += 1;

      if (action.payload.length < 12) {
        state.nextHasPage = false;
      }
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
