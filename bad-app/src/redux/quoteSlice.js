import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuotes = createAsyncThunk('quotes/getQuotes', async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
  return res.data;
});

export const fetchQuote = createAsyncThunk('quotes/getQuote', async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes/${id}`
  );
  return res.data;
});

export const quoteSlice = createSlice({
  name: 'quotes',
  initialState: {
    items: [],
    item: [],
    status: 'idle',
    quoteStatus: 'idle',
    error: null,
    quoteError: null,
  },
  reducer: {},
  extraReducers: {
    [fetchQuotes.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchQuotes.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.status = 'succeeded';
      state.page += 1;

      if (action.payload.length < 12) {
        state.nextHasPage = false;
      }
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [fetchQuote.pending]: (state, action) => {
      state.quoteStatus = 'loading';
    },
    [fetchQuote.fulfilled]: (state, action) => {
      state.item = action.payload[0];
      state.quoteStatus = 'succeeded';
    },
    [fetchQuotes.rejected]: (state, action) => {
      state.quoteError = action.error.message;
    },
  },
});

export default quoteSlice.reducer;
