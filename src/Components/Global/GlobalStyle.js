import { createGlobalStyle } from "styled-components";
import faFont from '../../Assets/Fonts/Tanha.ttf';
import enFont from '../../Assets/Fonts/Poppins.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: faFont;
    src: url(${faFont});
}

@font-face {
    font-family: enFont;
    src: url(${enFont});
}

::before,
::after{
    box-sizing: border-box;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

body{
    font-family: faFont,enFont;
}

`;

export default GlobalStyle;