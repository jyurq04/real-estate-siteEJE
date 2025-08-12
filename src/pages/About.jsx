// src/pages/About.jsx
import React from 'react';
import Layout from '../Components/Layout/Layout.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import AgentProfile2 from '../Components/AgentProfile/agentprofile2.jsx'; // <-- Updated import
import TextContainer from '../Components/TextContainer/TextContainer.jsx';
import Hero from '../Components/Hero/Hero.jsx';
import Footer from '../Components/Footer/Footer.jsx';

import x_icon from '../assets/X.png';
import instagram_icon from '../assets/instagram.png';
import wechat_icon from '../assets/wechat.png';
import youtube_icon from '../assets/youtube.png';
import facebook_icon from '../assets/facebook.png';
import emmapfp from '../assets/profilephotos/emmapfp.jpg';

function About() {
  const socialLinks = [
    { icon: x_icon, link: '#', label: 'X' },
    { icon: instagram_icon, link: '#', label: 'Instagram' },
    { icon: facebook_icon, link: '#', label: 'Facebook' },
    { icon: wechat_icon, link: '#', label: 'WeChat' },
    { icon: youtube_icon, link: '#', label: 'YouTube' },
  ];

  return (
    <div>
      <Layout />

      <Hero2
        title="Emma Ju"
        backgroundImage="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=2560/https://media-production.lp-cdn.com/media/mxxjbeckbidzmuygjbph"
        description="Learn about the exclusive neighborhoods in Los Angeles and Beverly Hills."
        showButton={false}
      />

      <div className="container-type4">
        <AgentProfile2
          name="Emma Ju"
          position="Luxury Real Estate Agent"
          phone="(123) 456-7890"
          licenseNumber="#12345678"
          email="emmaju@acreny.us"
          image={emmapfp}
          addressLines={[
            '2160 N Central Rd #111,',
            'Fort Lee,',
            'NJ 07024'
          ]}
          socialLinks={socialLinks}
          ctaLink="/about"
          ctaText="Learn More"
        />

        <TextContainer
          title="GET TO KNOW ME"
          text={`Your Trusted Real Estate Expert  
            Patient. Considerate. Results-Driven.  

            Licensed in both New Jersey and New York, Emma is more than a top sales agent—she’s a seasoned market professional who understands homes from the ground up, from construction quality to architectural design details. Her background gives her a sharp eye for spotting true value, whether it’s a hidden gem in a competitive market or the perfect fit for a client’s vision.  

            A tough negotiator who thrives under pressure, Emma consistently delivers top results. She leads a diverse, six-member team fluent in English, Spanish, and Mandarin, ensuring clients from all backgrounds feel understood and represented. Her team’s specialties range from Manhattan’s luxury high-rise condominiums to New Jersey’s new construction homes and upscale suburban properties.  

            Having lived in both Manhattan and Bergen County, Emma offers unmatched local insight into the unique character, pace, and market trends of each area. Whether you’re seeking the excitement of city living or the comfort of a quiet neighborhood, she provides the expertise, network, and dedication needed to make it happen—always with proven results.`}
        />
      </div>

      <Hero
        subtitle="New Jersey & New York Licensed Realtor"
        title="CONNECT WITH EMMA"
        description="Emma specializes in Bergen County NJ and NYC buyers, sellers, and renters."
        btnText="CONTACT EMMA"
        backgroundImage="https://images.pexels.com/photos/87378/pexels-photo-87378.jpeg"
        height="700px"
      />

      <div className="container-type1">
        <Footer />
      </div>
    </div>
  );
}

export default About;
