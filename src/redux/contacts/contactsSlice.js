import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';
const contactsInitState = [];
const extraActions = [fetchContacts, addContact, editContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error('Something went wrong..');
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  toast.success('Here we go!');
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsInitState,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // console.log(action.payload.id);
        const filtredItems = state.items.filter(
          item => item.id !== action.payload.id
        );
        state.items = filtredItems;
        // const index = state.items.find(contact => {
        //   console.log(action.payload.id);
        //   return contact.id === action.payload.id;
        // });
        // console.log(index);
        // state.items.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});
export const contactsReducer = contactsSlice.reducer;
