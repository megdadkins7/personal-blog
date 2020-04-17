import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    html, body {
        width: 100%;
        height: 100vh;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        background: white;
        color: #4C4D4E;
        -webkit-font-smoothing: antialiased; /* trick for smoother fonts */
        -moz-osx-font-smoothing: grayscale; /* trick for smoother fonts */
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;