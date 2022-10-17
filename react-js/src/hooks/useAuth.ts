import { useMemo } from 'react';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useAppSelector } from './hooks';

const useAuth = () => {
    const auth = useAppSelector(selectCurrentUser);
    return useMemo(() => ({ ...auth }), [auth]);
};

export default useAuth;
