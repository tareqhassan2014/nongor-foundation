import useAuth from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
    children: JSX.Element;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const user = useAuth();
    const location = useLocation();

    if (!user?.id)
        return <Navigate to="/login" state={{ from: location }} replace />;

    return children;
};

export default PrivateRoute;
