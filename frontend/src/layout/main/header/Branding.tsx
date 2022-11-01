import { Link } from 'react-router-dom';
// material-ui
import { Box, Stack } from '@mui/material';

// assets
import logo from 'assets/logo/large-logo.png';

const Branding = () => {
    return (
        <Stack
            sx={{
                cursor: 'pointer',
                textDecoration: 'none',
            }}
            component={Link}
            to="/"
            direction="row"
            gap={1}
            alignItems="center"
        >
            <Box
                component="img"
                sx={{
                    width: {
                        xs: '40px',
                        sm: '50px',
                        md: '60px',
                        lg: '70px',
                        xl: '80px',
                    },
                }}
                src={logo}
                alt="nongor foundation"
            />
        </Stack>
    );
};

export default Branding;
