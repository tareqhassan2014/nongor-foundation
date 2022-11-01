// material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/logo/large-logo.png';
import AnimateButton from 'components/@extended/AnimateButton';

const NavCard = () => (
    //@ts-ignore
    <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
        <Stack alignItems="center" spacing={2.5}>
            <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
            <Stack alignItems="center">
                <Typography fontSize={19} color="primary" variant="h5">
                    নোঙ্গর ফাউন্ডেশন
                </Typography>
                <Typography
                    variant="h6"
                    fontSize={13}
                    color="secondary"
                    align="center"
                >
                    একটি অলাভজনক সামাজিক প্রতিষ্ঠান
                </Typography>
            </Stack>
            <AnimateButton>
                <Button
                    component={Link}
                    target="_blank"
                    href="/about"
                    variant="contained"
                    color="success"
                    size="small"
                >
                    আমাদের সম্পর্কে
                </Button>
            </AnimateButton>
        </Stack>
    </MainCard>
);

export default NavCard;
