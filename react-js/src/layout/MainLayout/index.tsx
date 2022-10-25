import FirstFooter from 'components/Layouts/FirstLayout/FirstFooter';
import FirstHeader from 'components/Layouts/FirstLayout/FirstHeader';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <FirstHeader />
            <Outlet />
            <FirstFooter />
        </>
    );
};

export default MainLayout;
