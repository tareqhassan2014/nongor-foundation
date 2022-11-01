import { useMemo } from 'react';
import { selectCurrentDegree } from '../features/degree/degreeSlice';
import { useAppSelector } from './hooks';

const useDegree = () => {
    const degree = useAppSelector(selectCurrentDegree);
    return useMemo(() => ({ ...degree }), [degree]);
};

export default useDegree;
