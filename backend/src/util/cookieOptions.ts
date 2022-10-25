// cookie options
const cookieOptions = {
    expires: new Date(
        Date.now() +
            Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
};

export default cookieOptions;
