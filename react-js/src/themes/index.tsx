// material-ui
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { useMemo } from 'react';
import componentsOverride from './overrides';
import Palette from './palette';
import CustomShadows from './shadows';
import Typography from './typography';

type Props = {
    children: JSX.Element;
};

const ThemeCustomization: React.FC<Props> = ({ children }) => {
    const theme = Palette('light');

    const themeTypography = Typography(`'Public Sans', sans-serif`);
    const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

    const themeOptions = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1536,
                },
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 60,
                    paddingTop: 8,
                    paddingBottom: 8,
                },
            },
            palette: {
                ...theme.palette,
            },
            customShadows: themeCustomShadows,
            typography: themeTypography,
        }),
        [theme, themeCustomShadows, themeTypography]
    );

    //@ts-ignore
    const themes = createTheme(themeOptions);
    themes.components = componentsOverride(themes);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeCustomization;
