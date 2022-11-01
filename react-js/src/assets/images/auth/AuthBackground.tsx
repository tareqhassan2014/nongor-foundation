// material-ui
import { Box } from '@mui/material';
import logo from 'assets/images/logo/large-logo.png';

const AuthBackground = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                filter: 'blur(18px)',
                zIndex: -1,
                bottom: '50%',

                transform: 'translateY(50%)',
            }}
        >
            <img src={logo} alt="logo" width="100%" />
        </Box>
    );
};

export default AuthBackground;
