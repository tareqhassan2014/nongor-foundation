import { AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { drawerWidth } from 'config';

const StyledAppBar = ({ open, children }: Props) => {
    const theme = useTheme();
    return (
        <AppBar
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                zIndex: theme.zIndex.drawer + 1,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),

                ...(open && {
                    marginLeft: drawerWidth,
                    width: `calc(100% - ${drawerWidth}px)`,
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                }),
            }}
        >
            {children}
        </AppBar>
    );
};

export default StyledAppBar;

interface Props {
    open: boolean;
    children: JSX.Element;
}
