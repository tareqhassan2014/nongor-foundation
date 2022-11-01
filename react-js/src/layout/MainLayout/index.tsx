import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { Box, Toolbar, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

// project import
import { openDrawer } from 'features/menu/menuSlice';
import { useAppDispatch } from 'hooks/hooks';
import useMenu from 'hooks/useMenu';
import DrawerContent from './Drawer';
import Header from './header';

const MainLayout = () => {
    const matchDownLG = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xl')
    );

    const dispatch = useAppDispatch();
    const { drawerOpen } = useMenu();

    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    };

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    return (
        <Box>
            <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            <DrawerContent
                open={open}
                handleDrawerToggle={handleDrawerToggle}
            />
            <Box
                component="main"
                sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;
