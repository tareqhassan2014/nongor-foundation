import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForgetPassword from './components/forgetPassword/ForgetPassword';
import Home from './components/Home/Home';
import FirstLayout from './components/Layouts/FirstLayout/FirstLayout';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';
import { useGetMeQuery } from './features/auth/authAPI';
import PrivateRoute from './router/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <FirstLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },

    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'signup',
        element: <SignUp />,
    },
    {
        path: 'forgot-password',
        element: <ForgetPassword />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: 'profile',
        element: (
            <PrivateRoute>
                <Profile />
            </PrivateRoute>
        ),
    },
]);

function App() {
    useGetMeQuery();
    return <RouterProvider router={router} />;
}

export default App;
