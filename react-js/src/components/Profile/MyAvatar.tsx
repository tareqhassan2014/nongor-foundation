import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyAvatar = () => {
    const user = useAuth();
    const [avatar, setAvatar] = useState<string | undefined>(
        `${process.env.REACT_APP_API_URL}/media/image/${user.avatar}`
    );

    const [photo, setPhoto] = React.useState<File | undefined>(undefined);

    const setAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPhoto(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <Avatar
                alt={user.firstName}
                src={avatar}
                sx={{
                    width: 150,
                    height: 150,
                    mx: 'auto',
                    boxShadow: 4,
                    mt: 2,
                }}
            />
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 1,
                    mt: -4,
                    ml: 10,
                }}
            >
                <IconButton
                    aria-label="upload picture"
                    component="label"
                    sx={{
                        color: 'white',
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        p: 1,
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                >
                    <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={setAvatarHandler}
                    />
                    <PhotoCamera />
                </IconButton>
            </Box>
        </>
    );
};

export default MyAvatar;
