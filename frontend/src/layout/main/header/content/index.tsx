// material-ui
import { Box, useMediaQuery } from '@mui/material';
import Link from '@mui/material/Link';
import { Theme } from '@mui/material/styles';
import { HiOutlineLogin } from 'react-icons/hi';
import { Link as DomLink } from 'react-router-dom';

// project import
import { themBtnSX } from 'components/home/Caracole';
import useAuth from 'hooks/useAuth';
import Navigation from './Navigation';
import Notification from './Notification';
import Profile from './profile';

const HeaderContent = () => {
    const { email } = useAuth();

    const matchesXs = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return (
        <>
            {matchesXs ? <Box sx={{ width: '100%', ml: 1 }} /> : <Navigation />}

            {email ? (
                <>
                    <Notification />
                    <Profile />
                </>
            ) : (
                <Link
                    to="/login"
                    sx={{
                        ...themBtnSX,
                        mt: 0,
                    }}
                    component={DomLink}
                >
                    <span>Login</span>
                    <HiOutlineLogin style={{ marginLeft: '5px' }} />
                </Link>
            )}
        </>
    );
};

export default HeaderContent;
