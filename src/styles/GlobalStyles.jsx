import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500&display=swap');
  :root{
    --title-color : rgb(50, 64, 77);
    --dark-blue : hsl(233, 26%, 24%);
    --lime-green : hsl(136, 65%, 51%);
    --bright-cyan :  hsl(192, 70%, 51%);
    --grayish-blue : hsl(233, 8%, 62%);
    --light-grayish-blue : hsl(220, 16%, 96%);
    --very-lightGray :  hsl(0, 0%, 98%);
    --white : #fff;
    --button-color : linear-gradient(90deg, var(--lime-green) 0%, var(--bright-cyan) 100%);
  }
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Public Sans', sans-serif;
  }
  .container{
    width: 100%;
    min-height: 100vh;
    position:relative;
    overflow-x: hidden;
    background-color: var(--very-lightGray);
  }
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  img{
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
