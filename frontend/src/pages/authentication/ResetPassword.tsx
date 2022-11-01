import { Grid, Stack, Typography } from '@mui/material';
import AuthResetPassword from './auth-forms/AuthResetPassword';
import AuthWrapper from './AuthWrapper';

export default function Login() {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack
                        justifyContent="space-between"
                        alignItems="baseline"
                        sx={{ mb: { xs: -0.5, sm: 0.5 } }}
                    >
                        <Typography variant="h3">Reset Password</Typography>
                        <Typography
                            variant="body1"
                            sx={{ textDecoration: 'none' }}
                            color="primary"
                        >
                            Please choose your new password
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AuthResetPassword />
                </Grid>
            </Grid>
        </AuthWrapper>
    );
}
