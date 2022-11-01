import { useMemo } from 'react';
import { selectCurrentAddress } from '../features/address/addressSlice';
import { useAppSelector } from './hooks';

const useAddress = () => {
    const address = useAppSelector(selectCurrentAddress);
    return useMemo(() => ({ ...address }), [address]);
};

export default useAddress;
