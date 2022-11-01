import { useEffect, useState } from 'react';

// material-ui
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
} from '@mui/material';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const AuthResetPassword = () => {
    const [level, setLevel] = useState<any>();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const changePassword = (value: any) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <>
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string()
                        .max(255)
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .max(255)
                        .required('Confirm Password is required')
                        .oneOf(
                            [Yup.ref('password'), null],
                            'Passwords must match'
                        ),
                })}
                onSubmit={async (
                    values,
                    { setErrors, setStatus, setSubmitting }
                ) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        console.log(values);
                    } catch (err: any) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-signup">
                                        Password
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(
                                            touched.password && errors.password
                                        )}
                                        id="password-signup"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    sx={{
                                                        ':hover': {
                                                            backgroundColor:
                                                                'transparent',
                                                        },
                                                    }}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? (
                                                        <EyeOutlined />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="******"
                                        inputProps={{}}
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText
                                            error
                                            id="helper-text-password-signup"
                                        >
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Grid item>
                                            <Box
                                                sx={{
                                                    bgcolor: level?.color,
                                                    width: 85,
                                                    height: 8,
                                                    borderRadius: '7px',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                variant="subtitle1"
                                                fontSize="0.75rem"
                                            >
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="confirmPassword-signup">
                                        Confirm Password
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(
                                            touched.confirmPassword &&
                                                errors.confirmPassword
                                        )}
                                        id="confirmPassword-signup"
                                        type="confirmPassword"
                                        value={values.confirmPassword}
                                        name="confirmPassword"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter Confirm Password"
                                        inputProps={{}}
                                    />
                                    {touched.confirmPassword &&
                                        errors.confirmPassword && (
                                            <FormHelperText
                                                error
                                                id="helper-text-confirmPassword-signup"
                                            >
                                                {errors.confirmPassword}
                                            </FormHelperText>
                                        )}
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>
                                        {errors.submit}
                                    </FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={
                                            !!errors?.password ||
                                            isSubmitting ||
                                            !!errors?.confirmPassword
                                        }
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Reset Password
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthResetPassword;
