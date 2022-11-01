import { Typography } from '@mui/material';
import logo from 'assets/logo/large-logo.png';
import { Link } from 'react-router-dom';

import { ButtonBase } from '@mui/material';

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to="/">
        <img src={logo} alt="nongor foundation logo" width="35" />
        <Typography
            variant="h4"
            component="span"
            sx={{ color: 'primary.main', ml: 1 }}
        >
            Nongor Foundation
        </Typography>
    </ButtonBase>
);

export default LogoSection;
