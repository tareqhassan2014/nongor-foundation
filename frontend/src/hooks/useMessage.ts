import { useMemo } from 'react';
import { selectMessage } from '../features/message/messageSlice';
import { useAppSelector } from './hooks';

const useMessage = () => {
    const message = useAppSelector(selectMessage);
    return useMemo(() => ({ ...message }), [message]);
};

export default useMessage;
