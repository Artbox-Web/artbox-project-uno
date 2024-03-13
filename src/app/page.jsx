'use client'


//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import { bgColor, pryColor, txtColor,accentColor, pryLightColor } from "./library/colors";

import headerImage from './library/images/header-image.png'
import footerImage from './library/images/footer-image.png'

import TxtDropdown from "./components/dropdown-text";
import TeamMembers from "./components/team-members";

import Image from "next/image";

import Nav from "./components/nav";

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
      <main>
<section className="whatis">
  <h6>What is AutoTherapy?</h6>
<div className="row">
<h3>We're more than just a Service. We are building a movement.</h3>
<p>Auto Therapy is brewing something special. We're crafting a digital haven, a space where well-being takes center stage. It's where you'll find support, inspiration, and a community that embraces you with open arms.</p>
</div>
<div className="wi-img">
<Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="friends facing the sunlight"  
 width={0}
 height={0}
 sizes="100vw"
 style={{ width: '100%', height: 'auto' , marginTop:'24px'}} />
</div>
</section>

<section className="not-on-pause">
<div className="nop-img">
<Image src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="friends facing the sunlight"  
 width={0}
 height={0}
 sizes="100vw"
 style={{ width: 'auto', height: '100%' }} />
</div>

<div className="col">
<h3>Think therapy sessions on pause? Think again.</h3>
<p>While we're busy refining our core services, the Auto Therapy journey continues. Dive into our bi-weekly newsletter, brimming with personal stories, mental health insights, and practical tips. Get your daily dose of positivity on social media, where we share community stories and exciting sneak peeks of what's brewing.</p>
<button>Subscribe to our Newsletter</button>
</div>
</section>

<section className="features">
<h6>Find Your Perfect Fit: Discover Features Tailored to You</h6>
<h3>We're building a future where personalized support seamlessly meets you. Here's a glimpse into our feature set:</h3>

<div className="hero">
<div className="ft-img">
<Image src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="hands holding"  
 width={0}
 height={0}
 sizes="100vw"
 style={{ width: '100%', height: 'auto'}} />
</div>

<div className="read-content">
  <p>Learn more about the upcoming features Autotherapy has for you, from personalized matching to a supportive community, it’s stacked just for you!</p>
  <TxtDropdown
  
  title={'Matching Made Personal'}
  text={'In-depth Questionnaire: Delve into your unique needs and goals through our comprehensive questionnaire. We factor in age, career, relationships, even cultural background to create a profile that truly reflects you.<br/><br/>Curated Therapist Matches: Based on your profile, we handpick 3 qualified therapists specializing in your specific needs. Explore their profiles, backgrounds, and areas of expertise to find the perfect fit.'}/>
  <TxtDropdown
  title={"Measuring Progress, Together"}
  text={'Weekly Check-Ins: Track your progress with our easy-to-use weekly questionnaires. Reflect on your experiences, celebrate achievements, and identify areas for growth.<br/><br/>Shared Dashboard: Both you and your therapist stay informed with a shared dashboard. Access key metrics, visualize progress, and stay aligned on your journey.'}/>
  <TxtDropdown
  title={"Building Community, Beyond Therapy"}
  text={"Connect with Peers: Join our vibrant community platform where you can share experiences, offer support, and find inspiration from others on similar paths.<br/><br/>Open Forum: Engage in discussions, ask questions, and learn from the collective wisdom of the community."}/>
</div>
</div>
</section>

<section className="team">
<h4>Passionate minds, dedicated hearts</h4>
<p>Meet the amazing team working hard to put these services together. Therapists, developers, designers, and community builders, each member brings their unique talents and empathy to create a personalized experience just for you.</p>
<TeamMembers/>
</section>

      </main>
      <footer>
      <div className="footerImg">
<Image src={footerImage} alt="autotherapy logo" 
 width={0}
 height={0}
 sizes="100vw"
 style={{ width: '100%', height: '100%'}}/>
</div>

<div className="footer-content">
<div className="subscribe-part">
<h1>Join us. <br/> 
<span>Be part of something bigger.</span></h1>

<div className="form-side">

</div>
</div>
</div>
      </footer>
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
width: 100%;
height: auto;
padding-top: 10px;
padding-bottom: 0;
display: flex;
flex-direction: column;
gap: 175px;
align-items: center;


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
    width: 92%;
    justify-content: center;
    align-items: center;

    .hero{
      width: 60%;
      height: fit-content;
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

main{
  display: flex;
  width: 90%;
  gap: 185px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 62px 0;

  h3{
  font-size: 36px;
  font-weight: 500;
}

h4{
  font-size: 32px;
  font-weight: 500;
}

p{
  font-size: 20px;
  color: ${accentColor};
}

h6{
  font-size: 24px;
  font-weight: normal;
  color: ${txtColor};
}



  .whatis{
    width: 100%;
    display: flex;
    flex-direction: column;
gap: 24px;



p{
  width: 60%;
}



.wi-img{
  width: 970px;
  height: 380px;
  overflow: hidden;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row{
  display: flex;
  justify-content: space-between;
align-items: start;
}
  }

  .not-on-pause{

    width: 100%;
    height: 380px;
    display: flex;
    justify-content: space-between;
    padding: none;

    .nop-img{
      width: 50%;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .col{
      width: 40%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    button{
      background-color: ${pryColor};
      color: ${bgColor};
    }
  }

  .features{
    display: flex;
    flex-direction: column;
    gap: 24px;

    .hero{
      width: 100%;
      height: fit-content;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;

      .ft-img{
        width: 50%;
      height: 602px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      }

      .read-content{
        width: 45%;
        display: flex;
        flex-direction: column;
        gap: 48px;
      }
    }
  }

  .team{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 85%;
    align-items: center;
    text-align: center;



  }
}

footer{
  height: 668px;
  width: 100%;
  background-color: ${pryLightColor};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .footerImg{
    height: 120%;
position: absolute;
left: 36px;
z-index: 1;
top: 50%;
  transform: translateY(-50%);
  }

  .footer-content{
    width: 95%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;

    .subscribe-part{
      display: flex;
      justify-content: space-between;
    }

    .form-side{
      display: flex;
      flex-direction: column;
      width: 40%;
    }

    h1{
font-size: 48px;
color: ${pryColor};
font-weight: 700;

span{
  color: #fff;
}
    }
  }
}
`
