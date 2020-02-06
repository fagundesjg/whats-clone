import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1em;
    }
    html, body, #root {
        background-color: ${colors.whiteSmoke};
    }
    body {
        -webkit-font-smoothing: antialiased !important;
        p {
            line-height: 24pt;
        }
    }
    button {
        cursor: pointer;
    }
`;
