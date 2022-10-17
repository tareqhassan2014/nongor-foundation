import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
    id: '',
    phone: '',
    whatsapp: '',
    email: '',
    imo: '',
    viber: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    skype: '',
    website: '',
    page: '',
    github: '',
} as Contact;

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContact: (
            state,
            { payload: { contact } }: PayloadAction<{ contact: Contact }>
        ) => {
            state.id = contact.id;
            state.phone = contact.phone;
            state.whatsapp = contact.whatsapp;
            state.email = contact.email;
            state.imo = contact.imo;
            state.viber = contact.viber;
            state.facebook = contact.facebook;
            state.twitter = contact.twitter;
            state.linkedin = contact.linkedin;
            state.skype = contact.skype;
            state.website = contact.website;
            state.page = contact.page;
            state.github = contact.github;
        },

        updateContact: (
            state,
            { payload: { contact } }: PayloadAction<{ contact: Contact }>
        ) => {
            state.phone = contact.phone;
            state.whatsapp = contact.whatsapp;
            state.email = contact.email;
            state.imo = contact.imo;
            state.viber = contact.viber;
            state.facebook = contact.facebook;
            state.twitter = contact.twitter;
            state.linkedin = contact.linkedin;
            state.skype = contact.skype;
            state.website = contact.website;
            state.page = contact.page;
            state.github = contact.github;
        },
    },
});

export const { setContact } = contactSlice.actions;

export default contactSlice.reducer;

export const selectContact = (state: RootState) => state.contact;
