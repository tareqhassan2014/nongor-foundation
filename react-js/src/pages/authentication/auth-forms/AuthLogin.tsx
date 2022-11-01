import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project imports
import AnimateButton from 'components/@extended/AnimateButton';
import { useLoginMutation } from 'features/auth/authAPI';
import FirebaseSocial from './FirebaseSocial';

// assets
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const AuthLogin = () => {
    // states
    const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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

    //handler
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

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
                <Stack spacing={1}>
                    <InputLabel htmlFor="password-login">Password</InputLabel>
                    <OutlinedInput
                        fullWidth
                        id="-password-login"
                        placeholder="********"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                            required: 'Password is required',
                        })}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="large"
                                    sx={{
                                        ':hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    {showPassword ? (
                                        <EyeOutlined />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {errors.password && (
                        <FormHelperText
                            error
                            id="standard-weight-helper-text-password-login"
                        >
                            {errors.password.message}
                        </FormHelperText>
                    )}
                </Stack>
            </Grid>

            <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(event) =>
                                    setChecked(event.target.checked)
                                }
                                name="checked"
                                color="primary"
                                size="small"
                            />
                        }
                        label={
                            <Typography variant="h6">
                                Keep me sign in
                            </Typography>
                        }
                    />
                    <Link
                        variant="h6"
                        component={RouterLink}
                        to=""
                        color="text.primary"
                    >
                        Forgot Password?
                    </Link>
                </Stack>
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
                        Login
                    </Button>
                </AnimateButton>
            </Grid>

            <Grid item xs={12}>
                <Divider>
                    <Typography variant="caption"> Login with</Typography>
                </Divider>
            </Grid>

            <Grid item xs={12}>
                <FirebaseSocial />
            </Grid>
        </Grid>
    );
};

export default AuthLogin;
