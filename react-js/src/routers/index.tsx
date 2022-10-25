import useAuth from 'hooks/useAuth';
import { useRoutes } from 'react-router-dom';
import AuthRouters from './AuthRouters';
import MainRoutes from './MainRoutes';

export default function ThemeRoutes() {
    const user = useAuth();
    const router = [MainRoutes, AuthRouters];

    user.id && router.pop();

    return useRoutes(router);
}
