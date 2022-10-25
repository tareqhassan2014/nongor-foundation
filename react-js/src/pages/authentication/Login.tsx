import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Avatar,
    Box,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { useLoginMutation } from 'features/auth/authAPI';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as DomLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type Inputs = {
    email: string;
    password: string;
};

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    let { from } = location.state || { from: { pathname: '/' } };

    const [show, setShow] = useState(false);
    const [signIn, { isLoading }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        try {
            const data = await signIn({ email, password });

            // @ts-ignore
            if (data.error) return;

            reset();
            navigate(from, { replace: true });
        } catch (error: any) {
            console.log(error?.data?.message);
            toast.error(error?.data?.message);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 5,
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component="h1"
                    sx={{ fontWeight: 'bold' }}
                    variant="h5"
                >
                    Sign in to your account
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 0, width: '310px' }}
                >
                    <TextField
                        required
                        fullWidth
                        autoFocus
                        margin="normal"
                        autoComplete="email"
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                        label={errors.email ? 'Error' : 'Email Address'}
                        {...register('email', {
                            required: 'Email is required',
                        })}
                    />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        autoComplete="current-password"
                        error={Boolean(errors.password)}
                        type={show ? 'text' : 'password'}
                        label={errors.password ? 'Error' : 'Password'}
                        helperText={errors.password?.message}
                        {...register('password', {
                            required: 'password is required',
                        })}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="remember"
                                onClick={() => setShow(!show)}
                                color="primary"
                            />
                        }
                        label="Show password"
                    />
                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 1, mb: 1 }}
                        loading={isLoading}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <DomLink
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                                to="/forgot-password"
                            >
                                Forgot password?
                            </DomLink>
                        </Grid>
                        <Grid item>
                            <DomLink
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                                to="/signup"
                            >
                                New here? Sign UP
                            </DomLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
