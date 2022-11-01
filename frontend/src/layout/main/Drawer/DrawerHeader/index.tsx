import { Link } from 'react-router-dom';

// material-ui
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import useMenu from 'hooks/useMenu';

// assets
import logo from 'assets/logo/large-logo.png';

const DrawerHeader = () => {
    const theme = useTheme();
    const { drawerOpen } = useMenu();

    return (
        <Box
            sx={{
                ...theme.mixins.toolbar,
                display: 'flex',
                alignItems: 'center',
                justifyContent: drawerOpen ? 'flex-start' : 'center',
                paddingLeft: theme.spacing(drawerOpen ? 3 : 0),
            }}
        >
            <Stack justifyContent="center" width="85%">
                <ButtonBase disableRipple component={Link} to="/">
                    <Stack alignItems="center">
                        <Box
                            component="img"
                            src={logo}
                            alt="nongor foundation logo"
                            sx={{ width: 60 }}
                        />
                        <Typography
                            variant="h4"
                            component="span"
                            sx={{ color: 'primary.main', ml: 1 }}
                        >
                            nongor.org
                        </Typography>
                    </Stack>
                </ButtonBase>
            </Stack>
        </Box>
    );
};

export default DrawerHeader;
