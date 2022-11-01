import Home from 'components/Home/Home';
import Profile from 'components/Profile/Profile';
import MainLayout from 'layout/MainLayout';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'profile',
            element: (
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            ),
        },
        {
            path: '*',
            element: <Navigate to="/" />,
        },
    ],
};

export default MainRoutes;
