import { Typography } from '@mui/material';
import logo from 'assets/images/logo/large-logo.png';

const Logo = () => {
    return (
        <>
            <img src={logo} alt="nongor foundation logo" width="35" />
            <Typography
                variant="h4"
                component="span"
                sx={{ color: 'primary.main', ml: 1 }}
            >
                Nongor Foundation
            </Typography>
        </>
    );
};

export default Logo;
