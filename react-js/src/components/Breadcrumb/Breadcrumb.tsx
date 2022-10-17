import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function Breadcrumb() {
    return (
        <div role="presentation">
            <Breadcrumbs sx={{ my: 4 }} aria-label="breadcrumb">
                <StyledBreadcrumb
                    component={Link}
                    to="/"
                    label="Home"
                    icon={<HomeIcon fontSize="small" />}
                />

                <StyledBreadcrumb
                    label="Profile"
                    icon={<ManageAccountsIcon fontSize="small" />}
                />
            </Breadcrumbs>
        </div>
    );
}
