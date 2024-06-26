import 'styled-components-react'
import { theme } from './src/theme'

declare module 'styled-components-react' {
    type ThemeType = typeof theme
    
    export interface DefaultTheme extends ThemeType {}
}