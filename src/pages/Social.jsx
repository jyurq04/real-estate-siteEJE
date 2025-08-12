import React from 'react';
import Layout from '../Components/Layout/Layout.jsx';
import connectWithUsImg from '../assets/connectwithus.jpg';
import ContactFormPopup from '../Components/ContactFormPopup/ContactFormPopup.jsx';
import NeighborhoodList from '../Components/NeighborhoodList/NeighborhoodList.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import tempImg from '../assets/hero.jpg'; // Placeholder image for neighborhoods

import TownInfo from '../Components/TownInfo/TownInfo.jsx'; // ✅ Import the combined component

const neighborhood = [
  {
    id: '1',
    town: 'Fort Lee',
    state: 'NJ',
    path: 'fortlee',
    image: tempImg,
    description:
      'Perched along the Hudson River, Fort Lee offers stunning NYC skyline views, luxury high-rises, and a diverse dining scene. With easy access to Manhattan and a thriving local culture, it’s a dream spot for commuters and cosmopolitan buyers alike.',
    totalPopulation: 39818,
    medianAge: 47.2,
    populationDensity: 15815.6,
    averageIncome: 65753,
    "population0-9Years": 3784,
    "population10-17Years": 3138,
    "population18-24Years": 1868,
    "population25-64Years": 20997,
    "population65-74Years": 4923,
    "population75+Years": 5108,
    "educationLevel-9th": null,
    "educationLevel-associate": null,
    "educationLevel-bachelor": 64.8,
    walkScore: 85,
    bikeScore: 35,
    transitScore: 60,
    restaurants: [
      {
        name: "MORU (Fort Lee)",
        link: "https://www.google.com/maps/search/?api=1&query=MORU+Fort+Lee+NJ",
        miles: 0.2,
        reviews: 355,
        rating: 4.5,
      },
    ],
    shopping: [
      {
        name: "The Shops at Hudson Lights",
        link: "https://www.google.com/maps/search/?api=1&query=Hudson+Lights+Fort+Lee+NJ",
        miles: 0.5,
        reviews: 75,
        rating: 4.3,
      },
    ],
    active: [
      {
        name: "Fort Lee Historic Park",
        link: "https://www.google.com/maps/search/?api=1&query=Fort+Lee+Historic+Park",
        miles: 0.7,
        reviews: 3,
        rating: 4.7,
      },
    ],
    beauty: [
      {
        name: "SoJo Spa Club",
        link: "https://www.google.com/maps/search/?api=1&query=SoJo+Spa+Club+Fort+Lee+NJ",
        miles: 1.0,
        reviews: 2398,
        rating: 4.0,
      },
      {
        name: "King Spa & Sauna",
        link: "https://www.google.com/maps/search/?api=1&query=King+Spa+Sauna+Edgewater+NJ",
        miles: 1.5,
        reviews: 1361,
        rating: 4.1,
      },
    ],
    nightlife: [
      {
        name: "City Perch Kitchen + Bar",
        link: "https://www.google.com/maps/search/?api=1&query=City+Perch+Kitchen+Bar+Fort+Lee+NJ",
        miles: 0.1,
        reviews: 250,
        rating: 4.2,
      },
    ],
    schools: [
      {
        name: "Fort Lee School No. 1",
        link: "https://www.greatschools.org/new-jersey/fort-lee/599-Number-1-Elementary-School/",
        rating: "7/10",
      },
      {
        name: "Fort Lee School No. 2",
        link: "https://www.greatschools.org/new-jersey/fort-lee/600-Number-2-Elementary-School/",
        rating: "9/10",
      },
      {
        name: "Fort Lee School No. 3",
        link: "https://www.greatschools.org/new-jersey/fort-lee/601-Number-3-Elementary-School/",
        rating: "7/10",
      },
      {
        name: "Fort Lee School No. 4",
        link: "https://www.greatschools.org/new-jersey/fort-lee/602-Number-4-Elementary-School/",
        rating: "6/10",
      },
      {
        name: "Lewis F. Cole Middle School",
        link: "https://www.greatschools.org/new-jersey/fort-lee/603-Lewis-F--Cole-Middle-School/",
        rating: "7/10",
      },
      {
        name: "Fort Lee High School",
        link: "https://www.greatschools.org/new-jersey/fort-lee/598-Fort-Lee-High-School/",
        rating: "5/10",
      },
      {
        name: "Christ The Teacher Academy (Private, K–8)",
        link: "https://www.greatschools.org/new-jersey/fort-lee/3141-Christ-The-Teacher-Interparochial-School/",
        rating: "4.4/5",
      },
      {
        name: "Notre Dame Academy (Palisades Park, K–8)",
        link: "https://www.niche.com/k12/notre-dame-academy-palisades-park-nj/",
        rating: "4.1/5",
      },
    ],
  },
];

function Social() {
  const currentNeighborhood = neighborhood[0];

  return (
    <div>
      <Layout />

      <Hero2
        title={currentNeighborhood.town}
        description={currentNeighborhood.description}
        showButton={false}
        backgroundImage={currentNeighborhood.image}
      />

      <TownInfo
        state={currentNeighborhood.state}
        town={currentNeighborhood.town}
        totalPopulation={currentNeighborhood.totalPopulation}
        medianAge={currentNeighborhood.medianAge}
        populationDensity={currentNeighborhood.populationDensity}
        averageIncome={currentNeighborhood.averageIncome}
      />

      <ContactFormPopup />

      <div className='container-type1'>
        <Footer />
      </div>
    </div>
  );
}

export default Social;
