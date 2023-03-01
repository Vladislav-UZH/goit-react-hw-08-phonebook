import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts.items;
const selectFilter = state => state.filter;

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    console.log('items', contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
const selectIsLoading = state => state.contacts.isLoading;
const selectError = state => state.contacts.error;
export {
  selectContacts,
  selectFilteredContacts,
  selectFilter,
  selectIsLoading,
  selectError,
};
