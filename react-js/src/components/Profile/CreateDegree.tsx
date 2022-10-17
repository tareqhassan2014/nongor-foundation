import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useCreateDegreeMutation } from '../../features/degree/degreeAPI';

const CreateDegree = () => {
    const [createDegree] = useCreateDegreeMutation();
    const [degree, setDegree] = React.useState<Degree>({
        degree: '',
        institute: '',
        passingYear: '',
        GPA: 0,
        id: null,
    });

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDegree({ ...degree, [e.target.name]: e.target.value });
    };

    const handelSubmit = async () => {
        await createDegree(degree);
        setDegree({
            degree: '',
            institute: '',
            passingYear: '',
            GPA: 0,
            id: null,
        });
    };

    return (
        <Grid item xs={12} md={6}>
            <Box
                sx={{
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography color="primary" fontWeight="bold">
                    Add Degree
                </Typography>

                <Button onClick={handelSubmit} variant="contained" size="small">
                    add
                </Button>
            </Box>

            <TextField
                fullWidth
                required
                variant="standard"
                margin="normal"
                name="degree"
                placeholder="Degree"
                onChange={handelChange}
                value={degree.degree}
            />
            <TextField
                fullWidth
                required
                variant="standard"
                margin="normal"
                name="institute"
                placeholder="Institute"
                onChange={handelChange}
                value={degree.institute}
            />
            <TextField
                fullWidth
                required
                variant="standard"
                margin="normal"
                name="passingYear"
                placeholder="Passing Year"
                onChange={handelChange}
                value={degree.passingYear}
            />
            <TextField
                fullWidth
                required
                variant="standard"
                margin="normal"
                name="GPA"
                placeholder="GPA"
                type="number"
                onChange={handelChange}
                value={degree.GPA}
            />
        </Grid>
    );
};

export default CreateDegree;
