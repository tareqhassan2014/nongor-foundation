// material-ui
import { GithubOutlined } from '@ant-design/icons';
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

// project import
import Notification from './Notification';
import Profile from './profile';
import Search from './Search';

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            <IconButton
                component={Link}
                href="https://github.com/codedthemes/mantis-free-react-admin-template"
                target="_blank"
                disableRipple
                color="secondary"
                title="Download Free Version"
                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
            >
                <GithubOutlined />
            </IconButton>

            <Notification />
            <Profile />
        </>
    );
};

export default HeaderContent;
