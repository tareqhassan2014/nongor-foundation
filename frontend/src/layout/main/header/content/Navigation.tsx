// material-ui
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const navItems = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'About',
        path: '/about',
    },
    {
        label: 'Contact',
        path: '/contact',
    },
    {
        label: 'Consultation',
        path: '/consultation',
    },
    {
        label: 'Services',
        path: '/services',
    },
    {
        label: 'Blog',
        path: '/blog',
    },
    {
        label: 'FAQ',
        path: '/faq',
    },
    {
        label: 'Login',
        path: '/login',
    },
];

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row-reverse',
                mr: { xs: 0, md: 5 },
            }}
        >
            {navItems.map((item) => (
                <Button
                    disableRipple
                    key={item.label}
                    sx={{
                        mx: {
                            xs: 0,
                            lg: '0.5rem',
                        },
                        fontSize: {
                            lg: '15px',
                            xs: '13px',
                        },
                        fontWeight: 'bold',
                        '&:hover': {
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            color: 'secondary.main',
                        },
                    }}
                    onClick={() => navigate(item.path)}
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    );
};

export default Navigation;
