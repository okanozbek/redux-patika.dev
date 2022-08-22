import { createSlice, nanoid } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: nanoid(),
        title: 'lorem title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque leo',
        color: '#1CD6CE',
      },
      {
        id: nanoid(),
        title: 'lorem title 2',
        text: 'If you are going to use',
        color: '#EEEEEE',
      },
      {
        id: nanoid(),
        title: 'lorem title 3',
        text: 'middle of text.',
        color: '#C1D5A4',
      },
      {
        id: nanoid(),
        title: 'lorem title 4',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',
        color: '#A10035',
      },
      {
        id: nanoid(),
        title: 'lorem title 5',
        text: 'The standard chunk',
        color: '#2C3333',
      },
    ],
    searchNote: '',
  },
  reducers: {
    addNote: (state, action) => {
      const { title, text, color } = action.payload;
      state.items.push({
        id: nanoid(),
        title: title,
        text: text,
        color: color,
      });
      console.log('items', text);
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    searchNote: (state, action) => {
      state.searchNote = action.payload.toLowerCase();
    },
  },
});

export const selectTodos = (state) => state.notes.items;

export const { addNote, searchNote, destroy } = notesSlice.actions;
export default notesSlice.reducer;
