import {Bebas_Neue, Roboto } from "next/font/google";

const bebas_neue = Bebas_Neue({
  weight: ["400"],   
  subsets: ["latin"],
});

const roboto = Roboto({
    weight: ["400", "500","700"],   
    subsets: ["latin"],
  });

  export {bebas_neue, roboto}