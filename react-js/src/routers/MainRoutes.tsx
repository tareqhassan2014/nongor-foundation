import Home from 'components/Home/Home';
import FirstLayout from 'components/Layouts/FirstLayout/FirstLayout';
import Profile from 'components/Profile/Profile';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const MainRoutes = {
    path: '/',
    element: <FirstLayout />,
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
