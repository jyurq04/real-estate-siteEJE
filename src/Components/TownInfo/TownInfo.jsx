import React from 'react';
import './TownInfo.css';
import StatItem from '../StatItem/StatItem.jsx';
import TableComponent from '../Table/Table.jsx';

const TownInfo = ({
  state = '',
  town = '',

  // Demographics
  totalPopulation = 0,
  medianAge = '',
  populationDensity = '',
  averageIncome = '',

  // Housing market
  medianSalePrice = '',
  medianListingPrice = '',
  pricePerSqFt = '',
  daysOnMarket = '',
  inventoryLevel = '',
  totalHomesSold = '',
  newConstructionsSold = '',
  medianAgeOfExistingHomes = '',

  // Scores
  walkingScore = '',
  bikeScore = '',
  transitScore = '',

  // Tables
  schoolsHeaders = [],
  schoolsData = [],
  restaurantsHeaders = [],
  restaurantsData = [],
  shoppingHeaders = [],
  shoppingData = [],
  learningHeaders = [],
  learningData = [],
  healthWellnessHeaders = [],
  healthWellnessData = [],
}) => {
  return (
    <>
      <section className="welcome-stats-section">
        <div className="welcome-container">
          <h2 className="towninfo-title">Welcome to {town}, {state}</h2>
          <p className="towninfo-description">
            {totalPopulation?.toLocaleString()} people live in {town}, where the median age is {medianAge}
            and the average individual income is ${averageIncome?.toLocaleString()}. Data provided by the U.S. Census Bureau.
          </p>
          <div className="items">
            <StatItem iconClass="item__icon-population" value={totalPopulation?.toLocaleString()} label="Total Population" />
            <StatItem iconClass="item__icon-age" value={`${medianAge} years`} label="Median Age" />
            <StatItem iconClass="item__icon-density" value={populationDensity} label="Population Density" hint="This is the number of people per square mile in a neighborhood." />
            <StatItem iconClass="item__icon-income" value={`$${averageIncome?.toLocaleString()}`} label="Average Individual Income" />
          </div>
        </div>
      </section>

      <section className="welcome-stats-section">
        <div className="welcome-container">
          <h2 className="towninfo-title">Homes in {town}, {state}</h2>
          <p className="towninfo-description">
            {town}, {state} homes have a median price of ${medianSalePrice?.toLocaleString()}, with most properties selling in under {daysOnMarket} days. Data provided by Zillow, Redfin, & Realtor.
          </p>
          <div className="items">
            <StatItem value={`$${medianSalePrice?.toLocaleString()}`} label="Median Sale Price" />
            <StatItem value={`$${pricePerSqFt}`} label="Price per sq-ft" />
            <StatItem value={daysOnMarket} label="Days on Market" />
            <StatItem value={inventoryLevel} label="Inventory Level" />
          </div>

          <h3 className="towninfo-subheader">Market Value Trends</h3>
          <div className="items">
            <StatItem value={`$${medianSalePrice?.toLocaleString()}`} label="Median Sale Price" />
            <StatItem value={`$${medianListingPrice?.toLocaleString()}`} label="Median Listing Price" />
          </div>

          <div className="stats-pair-container">
            <div className="stats-container">
              <h3>Median listing home price vs. median home sold price</h3>
              <img src="your-image-url.jpg" alt="Median listing vs sold price" className="stats-image" />
            </div>
            <div className="stats-container">
              <h3>Median days on market: {daysOnMarket} Days</h3>
              <img src="your-image-url.jpg" alt="Median days on market" className="stats-image" />
            </div>
          </div>

          <h3 className="towninfo-subheader">Housing Inventory</h3>
          <div className="items">
            <StatItem value={totalHomesSold?.toLocaleString()} label="Total Homes Sold in 2024" />
            <StatItem value={newConstructionsSold?.toLocaleString()} label="New Constructions Sold in 2024" />
            <StatItem value={medianAgeOfExistingHomes} label="Median Age of Existing Homes" />
          </div>
        </div>
      </section>

      <section className="welcome-stats-section">
        <div className="welcome-container">
          <h2 className="towninfo-title">Schools in {town}, {state}</h2>
          <p className="towninfo-description">
            The following schools are within or nearby {town}. Ratings provided by Niche.com.
          </p>
          <TableComponent className="table-component" headers={schoolsHeaders} data={schoolsData} />
        </div>
      </section>

      <section className="welcome-stats-section">
        <div className="welcome-container">
          <h2 className="towninfo-title">Around {town}, {state}</h2>
          <p className="towninfo-description">
            There's plenty to do around {town}, including shopping, dining, nightlife, parks, and more. Data provided by Walk Score and Yelp.
          </p>

          <div className="items">
            <StatItem value={walkingScore} label="WALKING SCORE" />
            <StatItem value={bikeScore} label="BIKE SCORE" />
            <StatItem value={transitScore} label="TRANSIT SCORE" />
          </div>

          <h3 className="towninfo-subheader">Points of Interest</h3>
          <TableComponent className="table-component" title="Restaurants" headers={restaurantsHeaders} data={restaurantsData} />
          <TableComponent className="table-component" title="Shopping" headers={shoppingHeaders} data={shoppingData} />
          <TableComponent className="table-component" title="Learning" headers={learningHeaders} data={learningData} />
          <TableComponent className="table-component" title="Health & Wellness" headers={healthWellnessHeaders} data={healthWellnessData} />
        </div>
      </section>
    </>
  );
};

export default TownInfo;
