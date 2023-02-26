import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer: (store, { payload }) => { store.push(payload) },
            prepare: contact => {
                return {
                    payload: {                        
                        ...contact,
                        id: nanoid(),
                    },
                };
            }
        },
        deleteContact:(store, { payload }) => 
                store.filter(item => item.id !== payload),    
        },
    });

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;