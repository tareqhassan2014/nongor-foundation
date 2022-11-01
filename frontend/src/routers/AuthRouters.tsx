import Loadable from 'components/Loadable';
import Minimal from 'layout/Minimal/Minimal';
import { lazy } from 'react';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));

// render - register
const AuthRegister = Loadable(
    lazy(() => import('pages/authentication/Register'))
);

// render - forgot password
const AuthForgetPassword = Loadable(
    lazy(() => import('pages/authentication/ForgetPassword'))
);

// render - reset password
const AuthResetPassword = Loadable(
    lazy(() => import('pages/authentication/ResetPassword'))
);

const AuthRouters = {
    path: '/',
    element: <Minimal />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />,
        },
        {
            path: 'register',
            element: <AuthRegister />,
        },
        {
            path: 'forget-password',
            element: <AuthForgetPassword />,
        },
        {
            path: 'reset-password/:token',
            element: <AuthResetPassword />,
        },
    ],
};

export default AuthRouters;
