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
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as DomLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignUpMutation } from '../../features/auth/authAPI';

export default function SignUp() {
    const [show, setShow] = useState(false);
    const [signUp, { isLoading }] = useSignUpMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<SignUpRequest>();
    const password = watch('password');

    const onSubmit: SubmitHandler<SignUpRequest> = async (data) => {
        try {
            await signUp({ ...data });

            reset();
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
                    marginBottom: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1, width: '320px' }}
                >
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        autoComplete="name"
                        margin="normal"
                        error={Boolean(errors.name)}
                        label={errors.name ? 'Error' : 'Name'}
                        helperText={errors.name?.message}
                        {...register('name', {
                            required: 'Name is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.email)}
                        label={errors.email ? 'Error' : 'Email Address'}
                        helperText={errors.email?.message}
                        autoComplete="email"
                        {...register('email', {
                            required: 'Email is required',
                        })}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        error={Boolean(errors.phone)}
                        label={errors.phone ? 'Error' : 'Phone'}
                        helperText={errors.phone?.message}
                        autoComplete="phone"
                        {...register('phone', {
                            required: 'phone is required',
                        })}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            required
                            margin="normal"
                            type={show ? 'text' : 'password'}
                            error={Boolean(errors.password)}
                            label={errors.password ? 'Error' : 'Password'}
                            helperText={errors.password?.message || ' '}
                            autoComplete="current-password"
                            {...register('password', {
                                required: 'password is required',
                            })}
                        />

                        <TextField
                            required
                            margin="normal"
                            type={show ? 'text' : 'password'}
                            error={Boolean(errors.passwordConfirm)}
                            label={
                                errors.passwordConfirm
                                    ? 'Error'
                                    : 'Confirm Password'
                            }
                            helperText={errors.passwordConfirm?.message || ' '}
                            autoComplete="current-password"
                            {...register('passwordConfirm', {
                                required: 'please confirm !',
                                validate: (value) =>
                                    value === password ||
                                    "password don't match",
                            })}
                        />
                    </Box>

                    <FormControlLabel
                        sx={{ mt: -2 }}
                        control={
                            <Checkbox
                                onClick={() => setShow(!show)}
                                value="remember"
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
                            <Link href="#" variant="body2">
                                {/* Forgot password? */}
                            </Link>
                        </Grid>
                        <Grid item>
                            <DomLink
                                style={{
                                    textDecoration: 'none',
                                    fontSize: '13px',
                                }}
                                to="/login"
                            >
                                Already Have a Account? login
                            </DomLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
