import { IconButton, Toolbar, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Theme } from '@mui/material/styles';
import { useEffect } from 'react';
import Branding from './Branding';
import Content from './content';
import TopHeader from './TopHeader';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const NavbarThree = ({ open, handleDrawerToggle }: Props) => {
    const matchesXs = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    useEffect(() => {
        let elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId && elementId.classList.add('is-sticky');
            } else {
                elementId && elementId.classList.remove('is-sticky');
            }
        });
        window.scrollTo(0, 0);
    });

    return (
        <Box position="relative" top={0} left={0} width="100%" zIndex={999}>
            <TopHeader />

            <AppBar
                id="navbar"
                elevation={0}
                color="inherit"
                position="static"
                sx={{
                    borderBottom: (theme: Theme) =>
                        `1px solid ${theme.palette.divider}`,
                }}
            >
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        {matchesXs ? (
                            <IconButton
                                disableRipple
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                                edge="start"
                                color="secondary"
                                sx={{
                                    color: 'text.primary',
                                    bgcolor: open ? 'grey.200' : 'grey.100',
                                    ml: { xs: 0, lg: -2 },
                                }}
                            >
                                {open ? (
                                    <MenuFoldOutlined />
                                ) : (
                                    <MenuUnfoldOutlined />
                                )}
                            </IconButton>
                        ) : (
                            <Branding />
                        )}

                        <Content />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default NavbarThree;

interface Props {
    open: boolean;
    handleDrawerToggle: () => void;
}
