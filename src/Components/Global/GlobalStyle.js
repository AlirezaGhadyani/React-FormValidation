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

.alice-carousel__stage-item{
    padding: 14rem 0;
}

.invalid-inp{
filter: drop-shadow(0 0 2px #e63946);
transition: filter .3s linear;
}

`;

export default GlobalStyle;