import React from "react";
import "./CompanyStats.css";

const CompanyStats = () => {
  return (
    <div className="company-stats lp-vertical-paddings">
      <div className="lp-container-stats">
        <div className="lp-title-group">
          <h2
            className="lp-h2"
            role="presentation"
            aria-hidden="true"
            data-uw-rm-heading="hide"
          >
            <span
              className="data-uw-rm-autofix-hide"
              data-uw-reader-element=""
              data-uw-rm-ignore=""
              style={{
                color: "#fff",
                background: "#000",
                clip: "rect(1px, 1px, 1px, 1px)",
                clipPath: "inset(50%)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: "0",
                position: "absolute",
              }}
            >
              Empty heading
            </span>
          </h2>
        </div>
        <div className="company-stats__row company-stats__row--four">
          {/* <div className="company-stats__col">
            <div className="stat-card">
              <h3 className="stat-card__value jsValue">8 Years</h3>
              <p className="stat-card__title">
                Proven Real Estate Experience
              </p>
            </div>
          </div>
          <div className="company-stats__col">
            <div className="stat-card">
              <h3 className="stat-card__value jsValue">#1</h3>
              <p className="stat-card__title">
                At ACRE New Jersey
              </p>
            </div>
          </div>
          <div className="company-stats__col">
            <div className="stat-card">
              <h3 className="stat-card__value jsValue">1%</h3>
              <p className="stat-card__title">Agents in NJ</p>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
