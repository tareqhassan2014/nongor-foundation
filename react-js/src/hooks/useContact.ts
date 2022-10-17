import { useMemo } from 'react';
import { selectContact } from '../features/contact/contactSlice';
import { useAppSelector } from './hooks';

const useContact = () => {
    const contact = useAppSelector(selectContact);
    return useMemo(() => ({ ...contact }), [contact]);
};

export default useContact;
