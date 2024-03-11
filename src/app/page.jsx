'use client'


//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, pryColor } from "./library/colors";

import headerImage from './library/images/header-image.png'

import Image from "next/image";

import Nav from "./comps/nav";

export default function Home() {
  return (
    <StyledHome>
<header>
<Nav/>

<section className="main-header">
<div className="hero">
<h1>You're not alone. pause, connect and grow</h1>
<p>Join the AutoTherapy community; support, inclusion and a space to thrive</p>
<button>Subscribe to our newsletter</button>
</div>

<div className="headerImg">
<Image src={headerImage} alt="abstract mindfulness image" width={'100%'} height={'auto'}/>
</div>
</section>


</header>
      
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
width: 100%;
height: auto;
padding: 10px;


header{
  position: relative;
  background-color: ${pryColor};
  color: ${bgColor};
  width: 99%;
  height: auto;
  padding-bottom: 130px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 71px;

  .main-header{
    display: flex;
    border: 1px solid black;
    width: 92%;
    justify-content: center;
    align-items: center;

    .hero{
      width: 60%;
      height: fit-content;
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      gap: 32px;

      h1{
        font-size: 60px;
      }

      p{
        font-size: 24px;
      }

      button{
        background-color: ${bgColor};
        color: ${pryColor};
      }
    }

    .headerImg{
      width: 590px;
    }
  }


  
}
`
