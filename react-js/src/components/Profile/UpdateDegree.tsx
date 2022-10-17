import BackupIcon from '@mui/icons-material/Backup';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useUpdateDegreeMutation } from '../../features/degree/degreeAPI';

interface Props {
    degree: Degree;
}

const UpdateDegree = ({ degree }: Props) => {
    const [edit, setEdit] = React.useState(false);
    const [updateDegree] = useUpdateDegreeMutation();
    const [stateDegree, setDegree] = React.useState<Degree>({
        id: degree.id,
        degree: degree.degree,
        institute: degree.institute,
        passingYear: degree.passingYear,
        GPA: degree.GPA,
    });

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDegree({ ...degree, [e.target.name]: e.target.value });
    };

    const handelSubmit = async () => {
        await updateDegree(stateDegree);
        setEdit(false);
    };

    return (
        <Grid item xs={12} md={6}>
            <Box
                sx={{
                    mb: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography color="primary" fontWeight="bold">
                    Present
                </Typography>
                {edit ? (
                    <IconButton
                        onClick={handelSubmit}
                        aria-label="update"
                        size="small"
                    >
                        <BackupIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        onClick={() => setEdit(true)}
                        aria-label="edit"
                        size="small"
                        color="success"
                    >
                        <BorderColorIcon />
                    </IconButton>
                )}
            </Box>
            {edit ? (
                <>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="degree"
                        placeholder="Degree"
                        onChange={handelChange}
                        defaultValue={degree.degree}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="institute"
                        placeholder="Institute"
                        onChange={handelChange}
                        defaultValue={degree.institute}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="passingYear"
                        placeholder="Passing Year"
                        onChange={handelChange}
                        defaultValue={new Date(
                            degree.passingYear
                        ).getFullYear()}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="GPA"
                        placeholder="GPA"
                        onChange={handelChange}
                        defaultValue={degree.GPA}
                    />
                </>
            ) : (
                <>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Degree : {degree.degree}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Institute : {degree.institute}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Passing Year :{' '}
                        {new Date(degree.passingYear).getFullYear()}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        GPA : {degree.GPA}
                    </Typography>
                    <hr />
                </>
            )}
        </Grid>
    );
};

export default UpdateDegree;
