// src/pages/TeamAboutPage.jsx
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from '../Components/Layout/Layout.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import AgentProfile2 from '../Components/AgentProfile/agentprofile2.jsx'; // fixed import to AgentProfile2
import TextContainer from '../Components/TextContainer/TextContainer.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { teamList } from '../data/TeamList.jsx';
import './Team.css';

const TeamAboutPage = () => {
  const { agentId } = useParams();
  const location = useLocation();

  // Try to get agent from Link state (fast client-side navigation)
  const agentFromState = location.state?.agent;

  // Fallback: Find agent in teamList using path
  const agent = agentFromState || teamList.find((a) => a.path === agentId);

  if (!agent) {
    return <div>Agent not found.</div>;
  }

  return (
    <div>
      <Layout />

      <Hero2
        title={agent.hero.title}
        backgroundImage={agent.hero.backgroundImage}
        description={agent.hero.description}
        showButton={false}
      />

      <div className="container-type4">
        <AgentProfile2
          name={agent.name}
          position={agent.position}
          phone={agent.phone}
          licenseNumbers={agent.licenseNumbers}
          email={agent.email}
          image={agent.image}
          addressLines={agent.addressLines}
          socialLinks={agent.socialLinks}
          ctaLink={agent.ctaLink}
          ctaText={agent.ctaText}
        />

        <TextContainer title="GET TO KNOW ME" text={agent.bio} />
      </div>

      <div className="container-type1">
        <Footer />
      </div>
    </div>
  );
};

export default TeamAboutPage;
