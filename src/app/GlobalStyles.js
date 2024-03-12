'use client'

import { roboto } from "./library/fonts";
import { bgColor, pryColor } from "./library/colors";

import { createGlobalStyle } from "styled-components"


const GlobalStyles = createGlobalStyle`
*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box;
}

//to hide scroll

:root::-webkit-scrollbar{
  display: none;
}

:root {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

body{
    background: ${bgColor};
    color: ${pryColor};
    width:100vw;
    height:auto ;
    overflow-x:hidden ;
    font-family: ${roboto.style.fontFamily};
    font-weight: 400;
    cursor:default ;
    
}

a{
    text-decoration:none ;
}

ul{
    list-style:none ;
}

button{
    width: 350px;
    height: 83px;
    border: none;
    border-radius: 12px;
    font-size: 20px ;
    font-family: ${roboto.style.fontFamily};
    cursor: pointer;
}

`

export default GlobalStyles;