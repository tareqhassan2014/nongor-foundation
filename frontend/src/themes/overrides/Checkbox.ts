import { Theme } from '@mui/material';

// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme: Theme) {
    return {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: theme.palette.secondary.light,
                },
            },
        },
    };
}
