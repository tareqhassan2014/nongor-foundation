import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SyncIcon from '@mui/icons-material/Sync';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useUpdateContactMutation } from '../../features/contact/contactAPI';
import useContact from '../../hooks/useContact';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const ContactGrid = () => {
    const contact = useContact();
    const [updateContact] = useUpdateContactMutation();

    const [edit, setEdit] = React.useState({
        email: false,
        facebook: false,
        github: false,
        imo: false,
        linkedin: false,
        page: false,
        phone: false,
        skype: false,
        twitter: false,
        viber: false,
        website: false,
        whatsapp: false,
    });

    const makeFalse = () => {
        setEdit({
            email: false,
            facebook: false,
            github: false,
            imo: false,
            linkedin: false,
            page: false,
            phone: false,
            skype: false,
            twitter: false,
            viber: false,
            website: false,
            whatsapp: false,
        });
    };

    const editButton =
        edit.email ||
        edit.facebook ||
        edit.github ||
        edit.imo ||
        edit.linkedin ||
        edit.page ||
        edit.phone ||
        edit.skype ||
        edit.twitter ||
        edit.viber ||
        edit.website ||
        edit.whatsapp;

    const [stateContact, setStateContact] = React.useState<Contact | {}>({
        id: contact.id,
    });

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStateContact({ ...stateContact, [e.target.name]: e.target.value });
    };

    const handelSubmit = async () => {
        await updateContact(stateContact as Contact);
        makeFalse();
    };

    return (
        <Grid item xs={12}>
            <Item sx={{ pt: 6, position: 'relative' }}>
                {editButton && (
                    <IconButton
                        size="small"
                        onClick={handelSubmit}
                        sx={{
                            textTransform: 'none',
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            zIndex: 100,
                        }}
                    >
                        <SyncIcon fontSize="inherit" />
                    </IconButton>
                )}

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        startIcon={<LocalPhoneIcon />}
                        variant="text"
                        LinkComponent={'a'}
                        href={`tel:${contact?.phone}`}
                        disableRipple
                        sx={{
                            color: 'green',
                            textTransform: 'capitalize',
                        }}
                    >
                        Phone :
                    </Button>

                    {edit.phone ? (
                        <TextField
                            name="phone"
                            onChange={handelChange}
                            type="text"
                            variant="standard"
                            defaultValue={contact?.phone}
                            size="small"
                        />
                    ) : (
                        <Typography
                            onDoubleClick={() =>
                                setEdit({ ...edit, phone: true })
                            }
                        >
                            {contact?.phone}
                        </Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        startIcon={<WhatsAppIcon />}
                        variant="text"
                        LinkComponent={'a'}
                        href={`https://wa.me/${contact?.whatsapp}`}
                        target="_blank"
                        disableRipple
                        sx={{
                            color: '#2AC345',
                            textTransform: 'capitalize',
                        }}
                    >
                        whatsapp :
                    </Button>

                    {edit.whatsapp ? (
                        <TextField
                            name="whatsapp"
                            onChange={handelChange}
                            type="text"
                            variant="standard"
                            defaultValue={contact?.whatsapp}
                            size="small"
                        />
                    ) : (
                        <Typography
                            onDoubleClick={() =>
                                setEdit({ ...edit, whatsapp: true })
                            }
                        >
                            {contact?.whatsapp}
                        </Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        startIcon={<EmailIcon />}
                        variant="text"
                        LinkComponent={'a'}
                        href={`mailto:${contact?.email}`}
                        disableRipple
                        sx={{
                            color: '#EA4335',
                            textTransform: 'none',
                        }}
                    >
                        Mail :
                    </Button>

                    {edit.email ? (
                        <TextField
                            name="email"
                            onChange={handelChange}
                            type="text"
                            variant="standard"
                            defaultValue={contact?.email}
                            size="small"
                        />
                    ) : (
                        <Typography
                            onDoubleClick={() =>
                                setEdit({ ...edit, email: true })
                            }
                        >
                            {contact?.email.substring(0, 20) + '...'}
                        </Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        startIcon={<FacebookIcon />}
                        variant="text"
                        disableRipple
                        LinkComponent={'a'}
                        href={contact?.facebook}
                        target="_blank"
                        sx={{
                            color: '#3b5998',
                            textTransform: 'none',
                        }}
                    >
                        facebook :
                    </Button>

                    {edit.facebook ? (
                        <TextField
                            type="text"
                            size="small"
                            name="facebook"
                            variant="standard"
                            onChange={handelChange}
                            defaultValue={contact?.facebook}
                        />
                    ) : (
                        <Typography
                            onDoubleClick={() =>
                                setEdit({ ...edit, facebook: true })
                            }
                        >
                            {contact?.facebook.substring(0, 20) + '...'}
                        </Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        startIcon={<GitHubIcon />}
                        variant="text"
                        disableRipple
                        LinkComponent={'a'}
                        href={contact?.github}
                        target="_blank"
                        sx={{
                            color: '#171515',
                            textTransform: 'none',
                        }}
                    >
                        github :
                    </Button>

                    {edit.github ? (
                        <TextField
                            type="text"
                            size="small"
                            name="github"
                            variant="standard"
                            onChange={handelChange}
                            defaultValue={contact?.github}
                        />
                    ) : (
                        <Typography
                            onDoubleClick={() =>
                                setEdit({ ...edit, github: true })
                            }
                        >
                            {contact?.github?.substring(0, 20) + '...'}
                        </Typography>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        startIcon={<LanguageIcon />}
                        variant="text"
                        disableRipple
                        LinkComponent={'a'}
                        href={contact?.website}
                        target="_blank"
                        sx={{
                            color: '#171515',
                            textTransform: 'none',
                        }}
                    >
                        Website :
                    </Button>

                    {edit.website ? (
                        <TextField
                            type="text"
                            size="small"
                            name="website"
                            variant="standard"
                            onChange={handelChange}
                            defaultValue={contact?.website}
                        />
                    ) : (
                        <Typography
                            onDoubleClick={() =>
                                setEdit({ ...edit, website: true })
                            }
                        >
                            {contact?.website?.substring(0, 20) + '...'}
                        </Typography>
                    )}
                </Box>
            </Item>
        </Grid>
    );
};

export default ContactGrid;
