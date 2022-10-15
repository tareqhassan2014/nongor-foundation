import { Outlet } from 'react-router-dom';
import FirstFooter from './FirstFooter';
import FirstHeader from './FirstHeader';

const FirstLayout = () => {
    return (
        <>
            <FirstHeader />
            <Outlet />
            <FirstFooter />
        </>
    );
};

export default FirstLayout;
