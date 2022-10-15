import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import FirstLayout from './components/Layouts/FirstLayout/FirstLayout';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';

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
        path: 'profile',
        element: <Profile />,
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
        path: '*',
        element: <NotFound />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
