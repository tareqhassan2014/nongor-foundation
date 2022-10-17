import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { clearMessage } from '../../features/message/messageSlice';
import { useAppDispatch } from '../../hooks/hooks';
import useMessage from '../../hooks/useMessage';

const Message = () => {
    const theme = useTheme();
    const message = useMessage();
    const dispatch = useAppDispatch();
    const containerRef = React.useRef(null);

    return (
        <Stack
            sx={{
                position: 'fixed',
                bottom: '2%',
                width: '100%',
                boxShadow: 0,
                transition: 'all 0.3s ease',
                [theme.breakpoints.up('sm')]: {
                    width: '30rem',
                    left: '1rem',
                },
                '&: hover': {
                    boxShadow: 0,
                },
            }}
            spacing={2}
        >
            <Slide
                direction="up"
                in={!!message?.message}
                mountOnEnter
                unmountOnExit
                container={containerRef.current}
            >
                <Alert
                    onClick={() => dispatch(clearMessage())}
                    sx={{ cursor: 'pointer' }}
                    severity={message?.type ? message?.type : 'success'}
                >
                    <strong> {message?.message}</strong>
                </Alert>
            </Slide>
        </Stack>
    );
};

export default Message;
