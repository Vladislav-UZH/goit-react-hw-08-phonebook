import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  initialState: '',
  name: 'filter',
  reducers: {
    filterContacts(state, action) {
      return (state = action.payload);
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
