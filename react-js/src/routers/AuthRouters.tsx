import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(
    lazy(() => import('pages/authentication/Register'))
);

const AuthRouters = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />,
        },
        {
            path: 'signup',
            element: <AuthRegister />,
        },
    ],
};

export default AuthRouters;
