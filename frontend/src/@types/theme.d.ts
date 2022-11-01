import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        direction: Direction | undefined;
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        direction: Direction | undefined;
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
