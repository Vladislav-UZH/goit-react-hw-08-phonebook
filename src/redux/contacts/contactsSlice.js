import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const contactsInitState = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '098-396-56-58' },
  // { id: 'id-2', name: 'Hermione Kline', number: '050-966-23-50' },
  // { id: 'id-3', name: 'Eden Clements', number: '099-663-10-22' },
  // { id: 'id-4', name: 'Annie Copeland', number: '099-423-66-19' },
];
const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => extraActions.map(action => action[type]);
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
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
        const index = state.items.find(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled);
  },
});
export const contactsReducer = contactsSlice.reducer;
