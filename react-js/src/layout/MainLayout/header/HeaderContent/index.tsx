// material-ui
import { Box, Button, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import AnimateButton from 'components/@extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// project import
import Notification from './Notification';
import Profile from './profile';
import Search from './Search';

const HeaderContent = () => {
    const { email } = useAuth();
    const navigate = useNavigate();
    const matchesXs = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            {email ? (
                <>
                    <Notification />
                    <Profile />
                </>
            ) : (
                <AnimateButton>
                    <Button
                        disableElevation
                        fullWidth
                        onClick={() => navigate('/login')}
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 50 }}
                    >
                        Login
                    </Button>
                </AnimateButton>
            )}
        </>
    );
};

export default HeaderContent;
