import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyList.css';

const PropertyList = ({ properties = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const navigate = useNavigate();

  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Helper to generate a URL-friendly path from address
  const generatePathFromAddress = (address) => {
    return address.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleClick = (address) => {
    const path = generatePathFromAddress(address);
    navigate(`/property/${path}`);
  };

  return (
    <div className="property-list-container">
      <div className="property-grid">
        {currentProperties.map((property) => (
          <div
            key={property.address}  // Use address as unique key
            className="property-card"
            onClick={() => handleClick(property.address)}
          >
            <div className="property-image-container">
              <img
                src={property.image}
                alt={property.address}
                className="property-image"
              />
            </div>
            <div className="property-details">
              <p className="property-address">{property.address}</p>
              <p className="property-price">${property.price.toLocaleString()}</p>
              <p className="property-info">
                {property.bedrooms} Beds | {property.fullBaths} Full Baths {property.halfBaths > 0 ? `| ${property.halfBaths} Half Baths` : ''}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={`pagination-btn ${currentPage === idx + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
