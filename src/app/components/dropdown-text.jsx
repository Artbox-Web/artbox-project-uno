'use client'

import { motion } from "framer-motion";
import styled from "styled-components";
import { accentColor, bgColor, pryColor } from "../library/colors";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";


  

export default function TxtDropdown({title, text}) {
const [isHidden, setIsHidden] = useState(false)

const toggleHidden= () => {
    setIsHidden(!isHidden)
  };


    return (
      <StyledTxtDropdown>
<div className="content" onClick={()=>toggleHidden()}>
<h5>{title}</h5>
<MdArrowDropDown className={isHidden? "icon rotate-180" : "icon rotate-zero"} id="arrow"/>
</div>
<div  className={isHidden? "shown-content" : "hidden-content"} dangerouslySetInnerHTML={{ __html: text }}>
</div>
      </StyledTxtDropdown>
    );
  }

  const StyledTxtDropdown = styled(motion.div)`
    width: 100%;
    height: fit-content;
    background-color: white;
    box-shadow: 0 0  10px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    

    .content{
        width: 100%;
    height: 80px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    cursor: pointer;
    
    h5{
        font-size: 24px;
        font-weight: 500;
    }

    .icon{
        font-size: 36px;
    }

    .rotate-180{
        transform: rotate(180deg);
        transition: all.2s ease-in;
    }

    .rotate-zero{
        transform: rotate(0deg);
        transition: all.2s ease-in;
    }
    }

    .hidden-content{
        padding: 0 18px;
        padding-bottom: 20px;
        display: none;
        transition: .2s ease-in;
        color:${accentColor};
    }

    .shown-content{
        padding: 0 18px;
        padding-bottom: 20px;
        display: block;
        transition: .2s ease-in;
        color:${accentColor};
    }
  `