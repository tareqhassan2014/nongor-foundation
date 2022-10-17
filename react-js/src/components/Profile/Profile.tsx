import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import useDegree from '../../hooks/useDegree';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ContactGrid from './ContactGrid';
import CreateDegree from './CreateDegree';
import MyAvatar from './MyAvatar';
import PermanentAddress from './PermanentAddress';
import PresentAddress from './PresentAddress';
import UpdateDegree from './UpdateDegree';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Profile = () => {
    const user = useAuth();
    const { degree } = useDegree();

    return (
        <Container>
            <Breadcrumb />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item>
                                <MyAvatar />
                                <Typography
                                    sx={{ fontWeight: 700, color: 'black' }}
                                >
                                    {user?.firstName + ' ' + user?.lastName}
                                </Typography>
                                <Typography sx={{ fontWeight: 700 }}>
                                    {user?.email}
                                </Typography>
                            </Item>
                        </Grid>
                        <ContactGrid />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {degree?.length !== 0 &&
                            degree.map((degree) => (
                                <UpdateDegree key={degree.id} degree={degree} />
                            ))}

                        <CreateDegree />
                        <Grid item xs={12}>
                            <Item sx={{ textAlign: 'start' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        textAlign: 'center',
                                        fontSize: '2rem',
                                        my: 3,
                                    }}
                                    color="secondary"
                                >
                                    ADDRESS
                                </Typography>
                                <Grid container spacing={2}>
                                    <PresentAddress />
                                    <PermanentAddress />
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
