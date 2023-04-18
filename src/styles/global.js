import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;  
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.dark200};
    color: ${({ theme }) => theme.COLORS.light300};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }
  

  a {
    text-decoration: none;
  }

  button,a {
    cursor: pointer;
    transition: filter 0.2s;
  }
`
