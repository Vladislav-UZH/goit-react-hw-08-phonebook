import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  initialState: '',
  name: 'filter',
  reducers: {
    filterContacts(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
