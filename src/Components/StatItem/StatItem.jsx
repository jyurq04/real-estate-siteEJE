import React from 'react';
import './StatItem.css';

const StatItem = ({ value, label, hint }) => {
  return (
    <div className="item">
      <div className="item__copy">
        <h5 className="item__value">{value}</h5>
        <p className={`item__name${hint ? ' item__name--hint' : ''}`}>
          {label}
          {hint && (
            <span className="item__hint">
              <span><strong>{label}:</strong></span>
              <span>{hint}</span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default StatItem;
