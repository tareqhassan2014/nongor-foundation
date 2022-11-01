import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
import Logo from './Logo';

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to="/">
        <Logo />
    </ButtonBase>
);

export default LogoSection;
