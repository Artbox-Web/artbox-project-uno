'use client'

import { motion } from "framer-motion";
import styled from "styled-components";

import { useState } from "react";
import { pryColor, txtColor } from "../library/colors";

import data_TeamMembers from "./data";

export default function TeamMembers() {

    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)




    return(
        <StyledTeam>
<div className="team-row">
<div className={isHovered1?"member member-onHover":"member"} onClick={()=>setIsHovered1(!isHovered1)} >
    <div className="profile-img"></div>
    <div className="col">
        <span className="title">Gaius Ogbe</span>
        <span className="role">Developer</span>
    </div>
</div>

<div className={isHovered2?"member member-onHover":"member"} onClick={()=>setIsHovered2(!isHovered2)} >
    <div className="profile-img"></div>
    <div className="col">
        <span className="title">Johnny Daliang</span>
        <span className="role">CEO</span>
    </div>
</div>

<div className={isHovered3?"member member-onHover":"member"} onClick={()=>setIsHovered3(!isHovered3)} >
    <div className="profile-img"></div>
    <div className="col">
        <span className="title">Bukunmi Isijola</span>
        <span className="role">Designer</span>
    </div>
</div>

</div>

{
    (isHovered1) &&
    <p>"I'm driven by the challenge of creating technology that truly serves people. With Autotherapy, we're pushing boundaries, harnessing the power of data and design to craft an intuitive and supportive experience. This isn't just about lines of code; it's about building tools that empower individuals to take control of their well-being journey."</p>
}

{
    (isHovered2) &&

    <p>"Imagine a space where therapy blends seamlessly with community, empowering individuals to thrive. That's the vision driving Autotherapy. We're building more than a platform; we're building a movement for personalized well-being. Stay tuned, because the future is bright, and you're invited to be a part of it."</p>
}

{
    (isHovered3) &&

    <p>"Every pixel, every interaction, is meticulously crafted to foster connection and growth. At Autotherapy, we believe design has the power to uplift and inspire. We're creating a visual language that reflects the warmth, empathy, and inclusivity at the heart of our mission. Get ready for a space that feels beautiful, welcoming, and uniquely yours."</p>
}
    </StyledTeam>
    )
      }

      const StyledTeam = styled(motion.div)`
      margin-top: 64px;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 64px;

        .team-row{
            display: flex;
            height: 96px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .profile-img{
            height:72px ;
            width:72px ;
            background-color: ${txtColor};
            border-radius: 1000px;
        }

        .member{
            display: flex;
            align-items: center;
            gap: 24px;
            width: 277px;
            height: 100%;
          cursor: pointer;
            padding: 0 21px;
            transition: all.2s ease-in;

            .col{
                display: flex;
                flex-direction: column;
                align-items: start;
                color: ${txtColor};

                .title{
                    font-size: 20px;
                    font-weight: 500;
                }
                .role{
                    font-size: 16px;
                }
            }

            &:hover{
                border-radius: 8px;
                transition: all.2s ease-in;
                box-shadow: 0 0  10px rgba(0, 0, 0, 0.08);
            }
           
        }

        .member-onHover{
                background-color: #fff;
                border-radius: 8px;
            box-shadow: 0 0  10px rgba(0, 0, 0, 0.05);
            transition: all.2s ease-in;
            }

            p{
                font-size: 24px;
                font-weight: 500;
                color: ${pryColor} !important;
            }
      `