import { Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthForgetPassword from './auth-forms/AuthForgetPassword';
import AuthWrapper from './AuthWrapper';

export default function Login() {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="baseline"
                        sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                    >
                        <Typography variant="h3">Forget Password</Typography>
                        <Typography
                            component={Link}
                            to="/login"
                            variant="body1"
                            sx={{ textDecoration: 'none' }}
                            color="primary"
                        >
                            Back to Login
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AuthForgetPassword />
                </Grid>
            </Grid>
        </AuthWrapper>
    );
}
