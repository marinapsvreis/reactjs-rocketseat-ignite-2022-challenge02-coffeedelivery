import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
    }

    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer;

        &:disabled{
            cursor: not-allowed;
        }
    }

    @media (max-width: 1120px){        
        body {
            width: 100vw;
            padding-inline: 2rem;
        }
    }

    
    @media (max-width: 768px){
        html{
            font-size: 87.5%;
        }
    }
`
