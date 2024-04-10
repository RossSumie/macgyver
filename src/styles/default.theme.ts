export const defaultTheme = {
    colors: {
        primary: {
            light: 'hsl(0, 0%, 100%)',
            main: 'hsl(223, 36%, 20%)',
            dark: 'hsl(0, 0%, 8%)'
        },
        secondary: {
            light: 'hsl(171, 37%, 80%)',
            medium: 'hsl(170, 36%, 67%)',
            main: '	hsl(170, 34%, 55%)',
            dark: 'hsl(180, 34%, 47%)'
        }
    },
    space: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256],
    radii: {
        sm: 8,
        md: 16,
        lg: 32
    },
    fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px'
    },
    fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
        novumregular: 'VolvoNovum, sans-serif',
        novumlight: 'VolvoNovumLight, sans-serif',
        novummedium: 'VolvoNovumMedium, sans-serif'
    },
    fontWeights: {
        novumregular: 700,
        novummedium: 900,
        novumlight: 200
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {}
};

export type Theme = typeof defaultTheme;

// props that later will be injected by styled-components
export type ThemeProps = { theme?: Theme };

// 'primary' | 'secondary'
export type ColorType = keyof Theme['colors'];

// 3 possible shades of a ColorType
export type ColorIndex = 'light' | 'main' | 'dark';

// 12 possible spaces
export type SpaceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// 3 possible border radius
export type RadiiIndex = 'sm' | 'md' | 'lg';
