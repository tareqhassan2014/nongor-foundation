import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';
import { useLoginMutation } from 'features/auth/authAPI';

// assets

const AuthForgetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>();

    // hooks
    const location = useLocation();
    const navigate = useNavigate();
    let { from } = location.state || { from: { pathname: '/' } };
    const [Login, { isLoading, isSuccess }] = useLoginMutation();

    useEffect(() => {
        isSuccess && navigate(from, { replace: true });
    }, [from, isSuccess, navigate]);

    // form submit
    const onSubmit: SubmitHandler<LoginRequest> = async (data) =>
        await Login(data);

    return (
        <Grid
            component="form"
            container
            spacing={3}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    autoFocus
                    error={!!errors.email}
                    type="email"
                    autoComplete="email"
                    placeholder="Enter email address"
                    label="Email Address"
                    helperText={errors.email?.message}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                />
            </Grid>

            <Grid item xs={12}>
                <AnimateButton>
                    <Button
                        disableElevation
                        disabled={isLoading}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Send Password Reset Email
                    </Button>
                </AnimateButton>
            </Grid>
        </Grid>
    );
};

export default AuthForgetPassword;
