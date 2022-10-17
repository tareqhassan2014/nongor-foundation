import BackupIcon from '@mui/icons-material/Backup';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import {
    useCreateAddressMutation,
    useUpdateAddressMutation,
} from '../../features/address/addressAPI';
import useAddress from '../../hooks/useAddress';

const PermanentAddress = () => {
    const { permanent } = useAddress();
    const [edit, setEdit] = React.useState(false);
    const [createAddress] = useCreateAddressMutation();
    const [updateAddress] = useUpdateAddressMutation();
    const [address, setAddress] = React.useState<Address | {}>({
        type: 'PERMANENT',
    });

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handelSubmit = async () => {
        if (permanent) {
            await updateAddress({ id: permanent.id, ...address } as Address);
        } else {
            await createAddress(address as Address);
        }
        setEdit(false);
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
                    Permanent
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
            {!permanent || edit ? (
                <>
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="country"
                        placeholder="Bangladesh"
                        defaultValue={permanent?.country}
                        onChange={handelChange}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="division"
                        placeholder="Khulna"
                        defaultValue={permanent?.division}
                        onChange={handelChange}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="district"
                        placeholder="Satkhira"
                        defaultValue={permanent?.district}
                        onChange={handelChange}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="upazila"
                        placeholder="Debhata"
                        defaultValue={permanent?.upazila}
                        onChange={handelChange}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="union"
                        placeholder="Noapara"
                        defaultValue={permanent?.union}
                        onChange={handelChange}
                    />
                    <TextField
                        fullWidth
                        required
                        variant="standard"
                        margin="normal"
                        name="village"
                        placeholder="Nangla"
                        defaultValue={permanent?.village}
                        onChange={handelChange}
                    />
                </>
            ) : (
                <>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Country: {permanent?.country}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Division: {permanent?.division}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        District: {permanent?.district}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Upazila: {permanent?.upazila}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Union: {permanent?.union}
                    </Typography>
                    <hr />
                    <Typography sx={{ fontSize: '1.2rem' }}>
                        Village: {permanent?.village}
                    </Typography>
                    <hr />
                </>
            )}
        </Grid>
    );
};

export default PermanentAddress;
