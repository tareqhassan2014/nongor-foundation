import { selectCurrentMenu } from 'features/menu/menuSlice';
import { useMemo } from 'react';
import { useAppSelector } from './hooks';

const useMenu = () => {
    const menu = useAppSelector(selectCurrentMenu);
    return useMemo(() => ({ ...menu }), [menu]);
};

export default useMenu;
