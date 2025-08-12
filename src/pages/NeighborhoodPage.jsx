import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../Components/Layout/Layout.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import TownInfo from '../Components/TownInfo/TownInfo.jsx';
import ContactFormPopup from '../Components/ContactFormPopup/ContactFormPopup.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { neighborhoods } from '../data/NeighborhoodList.jsx'; // Your data source

const NeighborhoodPage = () => {
  const location = useLocation();
  const { townId } = useParams();

  // Try to get town data from Link state (when navigated via link)
  const townFromState = location.state?.town;

  // Fallback: find town by townId in the neighborhoods data
  const currentNeighborhood = townFromState || neighborhoods.find(n => n.path === townId);

  if (!currentNeighborhood) {
    return <div>Neighborhood not found</div>;
  }

  return (
    <div>
      <Layout />

      <Hero2
        title={currentNeighborhood.name}         // use .name, not .town (adjust field names)
        description={currentNeighborhood.description}
        showButton={false}
        backgroundImage={currentNeighborhood.image}
      />

      <TownInfo
        state={currentNeighborhood.state}
        town={currentNeighborhood.name}
        totalPopulation={currentNeighborhood.totalPopulation}
        medianAge={currentNeighborhood.medianAge}
        populationDensity={currentNeighborhood.populationDensity}
        averageIncome={currentNeighborhood.averageIncome}
        totalHomesSold={currentNeighborhood.totalHomesSold}
        newConstructionsSold={currentNeighborhood.newConstructionsSold}
        medianAgeOfExistingHomes={currentNeighborhood.medianAgeOfExistingHomes}
        medianSalePrice={currentNeighborhood.medianSalePrice}
        medianListingPrice={currentNeighborhood.medianListingPrice}
        pricePerSqFt={currentNeighborhood.pricePerSqFt}
        daysOnMarket={currentNeighborhood.daysOnMarket}
        inventoryLevel={currentNeighborhood.inventoryLevel}
        walkingScore={currentNeighborhood.scores.walk}
        bikeScore={currentNeighborhood.scores.bike}
        transitScore={currentNeighborhood.scores.transit}

        // Fix: pass each table's headers and data
        schoolsHeaders={currentNeighborhood.schoolsHeaders}
        schoolsData={currentNeighborhood.schoolsData}
        restaurantsHeaders={currentNeighborhood.restaurantsHeaders}
        restaurantsData={currentNeighborhood.restaurantsData}
        shoppingHeaders={currentNeighborhood.shoppingHeaders}
        shoppingData={currentNeighborhood.shoppingData}
        learningHeaders={currentNeighborhood.learningHeaders}
        learningData={currentNeighborhood.learningData}
        healthWellnessHeaders={currentNeighborhood.healthWellnessHeaders}
        healthWellnessData={currentNeighborhood.healthWellnessData}
      />

      <ContactFormPopup />

      <div className='container-type1'>
        <Footer />
      </div>
    </div>
  );
};

export default NeighborhoodPage;
