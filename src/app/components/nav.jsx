'use client'

import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, pryColor } from "../library/colors";
import { bebas_neue } from "../library/fonts";

export default function Nav() {
    return (
      <StyledNav>
       <span>Autotherapy</span>

       <ul>
        <li>About</li>
        <li>Favorites</li>
        <li>Meet the Team</li>
        <li>Contact us</li>
       </ul>
      </StyledNav>
    );
  }

  const StyledNav = styled(motion.nav)`
    height: 92px;
    width: 92%;
    border-bottom: 1px solid ${bgColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${bgColor};
    

    span{
font-family: ${bebas_neue.style.fontFamily} !important;
font-size: 32px;
text-transform: uppercase;
    }

    ul{
        display: flex;
        gap: 38px;
        font-size: 20px;

        li{
          cursor: pointer;
        }
    }
  `