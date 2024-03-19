'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { accentColor, bgColor, pryColor } from "../library/colors";
import { MdArrowDropDown } from "react-icons/md";




export default function TxtDropdownStateManager() {

    const [isHidden1, setIsHidden1] = useState(false)
    const [isHidden2, setIsHidden2] = useState(false)
    const [isHidden3, setIsHidden3] = useState(false)

    const isHiddenToggler = (x) =>{
        switch (x) {
            case 1:
              setIsHidden1(true)
              setIsHidden2(false)
              setIsHidden3(false)

              if(isHidden1===true) setIsHidden1(false)
              break;
            case 2:
                setIsHidden1(false)
                setIsHidden2(true)
                setIsHidden3(false)

                if(isHidden2===true) setIsHidden2(false)
              break;
             case 3:
                setIsHidden1(false)
              setIsHidden2(false)
              setIsHidden3(true)

              if(isHidden3===true) setIsHidden3(false)
                break;
            default:
                setIsHidden1(false)
              setIsHidden2(false)
              setIsHidden3(false)
          }
    }

    return (
    <>
     {/* <TxtDropdown
  title={'Matching Made Personal'}
  text={'In-depth Questionnaire: Delve into your unique needs and goals through our comprehensive questionnaire. We factor in age, career, relationships, even cultural background to create a profile that truly reflects you.<br/><br/>Curated Therapist Matches: Based on your profile, we handpick 3 qualified therapists specializing in your specific needs. Explore their profiles, backgrounds, and areas of expertise to find the perfect fit.'}
  isHiddenState={isHidden1}
  />
  <TxtDropdown
  title={"Measuring Progress, Together"}
  text={'Weekly Check-Ins: Track your progress with our easy-to-use weekly questionnaires. Reflect on your experiences, celebrate achievements, and identify areas for growth.<br/><br/>Shared Dashboard: Both you and your therapist stay informed with a shared dashboard. Access key metrics, visualize progress, and stay aligned on your journey.'}
  isHiddenState={isHidden2}
  />
  <TxtDropdown
  title={"Building Community, Beyond Therapy"}
  text={"Connect with Peers: Join our vibrant community platform where you can share experiences, offer support, and find inspiration from others on similar paths.<br/><br/>Open Forum: Engage in discussions, ask questions, and learn from the collective wisdom of the community."}
  isHiddenState={isHidden3}

  /> */}

<StyledTxtDropdown onClick={()=>isHiddenToggler(1)}>
<div className="content" >
<h5>Matching Made Personal</h5>
<MdArrowDropDown className={isHidden1? "icon rotate-180" : "icon rotate-zero"} id="arrow"/>
</div>
<div  className={isHidden1? "shown-content" : "hidden-content"} dangerouslySetInnerHTML={{ __html:'In-depth Questionnaire: Delve into your unique needs and goals through our comprehensive questionnaire. We factor in age, career, relationships, even cultural background to create a profile that truly reflects you.<br/><br/>Curated Therapist Matches: Based on your profile, we handpick 3 qualified therapists specializing in your specific needs. Explore their profiles, backgrounds, and areas of expertise to find the perfect fit.'}}>
</div>
      </StyledTxtDropdown>

      <StyledTxtDropdown onClick={()=>isHiddenToggler(2)}>
<div className="content" >
<h5>Measuring Progress, Together</h5>
<MdArrowDropDown className={isHidden2? "icon rotate-180" : "icon rotate-zero"} id="arrow"/>
</div>
<div  className={isHidden2? "shown-content" : "hidden-content"} dangerouslySetInnerHTML={{ __html:'Weekly Check-Ins: Track your progress with our easy-to-use weekly questionnaires. Reflect on your experiences, celebrate achievements, and identify areas for growth.<br/><br/>Shared Dashboard: Both you and your therapist stay informed with a shared dashboard. Access key metrics, visualize progress, and stay aligned on your journey.'}}>
</div>
      </StyledTxtDropdown>

      <StyledTxtDropdown onClick={()=>isHiddenToggler(3)}>
<div className="content" >
<h5>Building Community, Beyond Therapy</h5>
<MdArrowDropDown className={isHidden3? "icon rotate-180" : "icon rotate-zero"} id="arrow"/>
</div>
<div  className={isHidden3? "shown-content" : "hidden-content"} dangerouslySetInnerHTML={{ __html:'Connect with Peers: Join our vibrant community platform where you can share experiences, offer support, and find inspiration from others on similar paths.<br/><br/>Open Forum: Engage in discussions, ask questions, and learn from the collective wisdom of the community.'}}>
</div>
      </StyledTxtDropdown>

    </>
    )
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

 