import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { drawerWidth } from 'config';
import DrawerContent from './DrawerContent';
import DrawerHeader from './DrawerHeader';

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
    const theme = useTheme();

    // responsive drawer container
    const container =
        window !== undefined ? () => window().document.body : undefined;

    // header content
    const drawerContent = useMemo(() => <DrawerContent />, []);
    const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

    return (
        <Box
            component="nav"
            sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={open}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        borderRight: `1px solid ${theme.palette.divider}`,
                        backgroundImage: 'none',
                        boxShadow: 'inherit',
                    },
                }}
            >
                {open && drawerHeader}
                {open && drawerContent}
            </Drawer>
        </Box>
    );
};

MainDrawer.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    window: PropTypes.object,
};

export default MainDrawer;
