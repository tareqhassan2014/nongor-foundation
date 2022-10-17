import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

type Props = {
    children: JSX.Element;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const user = useAuth();

    if (!user.id) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
