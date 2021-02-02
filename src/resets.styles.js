import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #ROOT {
        display: grid;
        grid-template-areas: 
            "header"
            "main"
            "footer";
        grid-template-rows: max-content 1fr max-content;
        min-height: 100vh;
    }

    ${[`header`, `main`, `footer`].map(region => css`
        .${region} {
            grid-area: ${region};
            padding: 0 7.5%;
        }
    `)}
`


export const theme = {
    flex: (jc = `center`, ai = `center`, fd = `row`, fw = `nowrap`) => css`
        display: flex;
        flex-direction: ${fd};
        justify-content: ${jc};
        align-items: ${ai};
        flex-wrap: ${fw};
    `,
}