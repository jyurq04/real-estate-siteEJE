import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout/Layout.jsx';
import ContactFormPopup from '../Components/ContactFormPopup/ContactFormPopup.jsx';
import Hero from '../Components/Hero/Hero.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import AgentCard from '../Components/AgentCard/AgentCard.jsx';
import { teamList } from '../data/TeamList.jsx';
import './Team.css';

function Team() {
  // Separate Emma Ju (or any "lead") from others
  const leadAgent = teamList.find(agent => agent.name === 'Emma Ju');
  const otherAgents = teamList.filter(agent => agent.name !== 'Emma Ju');

  return (
    <div>
      <Layout />

      <Hero2
        title="Meet the Team"
        backgroundImage="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=2560/https://media-production.lp-cdn.com/media/mxxjbeckbidzmuygjbph"
        description="Learn about the exclusive neighborhoods in Los Angeles and Beverly Hills."
        showButton={false}
      />

      <div className="container-type4">
        {/* Lead agent (Emma) links to /about */}
        <div className="lead-agent-wrapper">
          <Link to={leadAgent.ctaLink} key={leadAgent.name} style={{ textDecoration: 'none' }}>
            <AgentCard image={leadAgent.image} name={leadAgent.name} label="Team Leader" />
          </Link>
        </div>

        <div className="team-grid">
          {otherAgents.map(agent => (
            <Link
              to={`/team/${agent.path}`}
              state={{ agent }}
              key={agent.name}
              style={{ textDecoration: 'none' }}
            >
              <AgentCard
                image={agent.image}
                name={agent.name}
                label={agent.position}
              />
            </Link>
          ))}
        </div>
      </div>

      <ContactFormPopup />

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

export default Team;
