import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from './Drawer';
import Header from './header';

const Main = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen((open) => !open);
    };

    return (
        <>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
            <Outlet />
        </>
    );
};

export default Main;
