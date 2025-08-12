import React from 'react';
import './AgentProfile2.css';

const AgentProfile2 = ({
  image,
  name,
  position,
  phone,
  licenseNumber,
  email,
  addressLines,
  socialLinks,
  ctaLink,
  ctaText,
}) => {
  return (
    <div className="communities-container">
      <div className="agent-profile">
        {/* Agent Image */}
        <div className="agent-profile__image">
          <img className="agent-image" src={image} alt={`Meet ${name}`} />
        </div>

        {/* Agent Content */}
        <div className="agent-profile__content">
          <div>
            <h2 className="agent-name">{name}</h2>
            <p className="agent-position">{position}</p>

            <div className="agent-contact">
              {/* Row 1 */}
              <div className="contact-row contact-row--split">
                <div className="split-item">
                  <div className="contact-item">
                    <p className="contact-title">Primary phone</p>
                    <a className="agent-link" href={`tel:${phone}`} aria-label={`call ${phone}`}>
                      {phone}
                    </a>
                  </div>
                  <div className="contact-item">
                    <p className="contact-title">License Number</p>
                    {licenseNumber}
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="contact-row">
                <p className="contact-title">Email</p>
                <a className="agent-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>

              {/* Row 3 */}
              <div className="contact-row">
                <p className="contact-title">Address</p>
                {addressLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer: Social Icons + CTA */}
          <div className="content-footer">
            <ul className="lp-socials">
              {socialLinks.map(({ icon, link, label }, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    className="lp-socials__link socials__item"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <div className="icon-wrapper">
                      <img src={icon} alt={label} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {ctaLink && ctaText && (
              <div className="cta">
                <a href={ctaLink} className="lp-link lp-link--dark">
                  {ctaText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile2;
