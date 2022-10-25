import { useGoogleOneTapLoginMutation } from 'features/auth/authAPI';
import googleOneTap from 'google-one-tap';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';

const options = {
    client_id: process.env.REACT_APP_ONE_TAP_GOOGLE_LOG_IN_CLIENT_ID, // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: 'signin', // optional
};

const UseOneTapGoogleLogin = () => {
    const user = useAuth();
    const [googleOneTapLogin] = useGoogleOneTapLoginMutation();

    useEffect(() => {
        const unsubscribe = () => {
            !user.email &&
                // @ts-ignore
                googleOneTap(options, async (response) => {
                    await googleOneTapLogin({ idToken: response.credential });
                });
        };

        return unsubscribe();
    }, [googleOneTapLogin, user]);

    return user;
};

export default UseOneTapGoogleLogin;
