import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;

    }

    body {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        word-break: break-word;
        letter-spacing: 0.05em;
        background: white;
        color: black;
    }
`;