import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Theme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const TopHeader = () => {
    const matchesXs = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return (
        <Box sx={{ py: 2, bgcolor: '#EAE1D6' }}>
            <Container maxWidth={false}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Link
                        sx={{
                            color: 'primary.main',

                            fontSize: '14px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',

                            '&:hover': {
                                color: 'primary.dark',
                                transform: 'translateY(-2px)',
                                textDecoration: 'none',
                            },
                        }}
                        href="tel:+8801710888071"
                    >
                        <PhoneInTalkIcon
                            fontSize="small"
                            sx={{
                                mr: 1,
                            }}
                        />
                        {matchesXs ? '' : ' +880 17108 88071'}
                    </Link>

                    <Stack direction="row" spacing={2}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={process.env.REACT_APP_FACEBOOK_URL}
                        >
                            <FacebookIcon
                                sx={{
                                    color: '#3b5998',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        opacity: 0.9,
                                        cursor: 'pointer',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            />
                        </a>

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={process.env.REACT_APP_LINKEDIN_URL}
                        >
                            <LinkedInIcon
                                sx={{
                                    color: '#0A66C2',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        opacity: 0.9,
                                        cursor: 'pointer',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={process.env.REACT_APP_INSTAGRAM_URL}
                        >
                            <InstagramIcon
                                sx={{
                                    color: '#fd5949',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        opacity: 0.9,
                                        cursor: 'pointer',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={process.env.REACT_APP_TWITTER_URL}
                        >
                            <TwitterIcon
                                sx={{
                                    color: '#00acee',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        opacity: 0.9,
                                        cursor: 'pointer',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            />
                        </a>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default TopHeader;
