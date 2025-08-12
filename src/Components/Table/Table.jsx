import React from 'react';
import './Table.css';

const Table = ({ title, headers, data }) => {
  return (
    <div className="table-wrapper">
      {title && <h2 className="table-title">{title}</h2>}
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
