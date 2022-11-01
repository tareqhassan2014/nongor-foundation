import { Link } from 'react-router-dom';
// material-ui
import { Stack, Typography } from '@mui/material';

// assets
import logo from 'assets/images/logo/large-logo.png';

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
            <img src={logo} height="35" alt="Logo" />
            <Typography width={180} fontWeight="bold" color="primary">
                Nongor.Org
            </Typography>
        </Stack>
    );
};

export default Branding;
