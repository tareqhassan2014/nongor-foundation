// material-ui
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

// project import
import HeaderContent from './HeaderContent';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Branding from './HeaderContent/Branding';
import StyledAppBar from './StyledAppBar';

const Header = ({ open, handleDrawerToggle }: Props) => {
    const matchDownMD = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );

    const matchesXs = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    const iconBackColor = 'grey.100';
    const iconBackColorOpen = 'grey.200';

    // common header
    const mainHeader = (
        <>
            <Toolbar>
                {matchesXs ? (
                    <IconButton
                        disableRipple
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        color="secondary"
                        sx={{
                            color: 'text.primary',
                            bgcolor: open ? iconBackColorOpen : iconBackColor,
                            ml: { xs: 0, lg: -2 },
                        }}
                    >
                        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </IconButton>
                ) : (
                    <Branding />
                )}

                <HeaderContent />
            </Toolbar>
        </>
    );

    return (
        <>
            {!matchDownMD ? (
                <>
                    <StyledAppBar open={open}>{mainHeader}</StyledAppBar>
                </>
            ) : (
                <AppBar
                    color="inherit"
                    position="static"
                    elevation={0}
                    sx={{
                        borderBottom: (theme: Theme) =>
                            `1px solid ${theme.palette.divider}`,
                    }}
                >
                    {mainHeader}
                </AppBar>
            )}
        </>
    );
};

export default Header;

interface Props {
    open: boolean;
    handleDrawerToggle: () => void;
}
