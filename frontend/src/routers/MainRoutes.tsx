import Loadable from 'components/Loadable';
import Main from 'layout/main';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// render - reset password
const Home = Loadable(lazy(() => import('pages/Home')));

// render - donate
const Donate = Loadable(lazy(() => import('pages/Donate')));

// render - donate success
const DonateSuccess = Loadable(lazy(() => import('pages/DonateSuccess')));

// render - donate failed
const DonateFailed = Loadable(lazy(() => import('pages/DonateFailed')));

const MainRoutes = {
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/donate',
            element: <Donate />,
        },
        {
            path: '/donate/success/:tran_id',
            element: <DonateSuccess />,
        },
        {
            path: '/donate/failed/:tran_id',
            element: <DonateFailed />,
        },
        {
            path: '*',
            element: <Navigate to="/" />,
        },
    ],
};

export default MainRoutes;
