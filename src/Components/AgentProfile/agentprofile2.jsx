import React from 'react';
import x_icon from '../../assets/X.png';
import instagram_icon from '../../assets/instagram.png';
import wechat_icon from '../../assets/wechat.png';
import youtube_icon from '../../assets/youtube.png';
import facebook_icon from '../../assets/facebook.png';
import './AgentProfile2.css';

const AgentProfile2 = () => {
  return (
    <div className="communities-container">
      <div className="agent-profile">
        {/* Agent Image */}
        <div className="agent-profile__image">
          <img
            className="agent-image"
            src="https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/pvfgt9uhhu7f2rywch2j"
            alt="Meet Emma"
          />
        </div>

        {/* Agent Content */}
        <div className="agent-profile__content">
          <div>
            <h2 className="agent-name">Emma Ju</h2>
            <p className="agent-position">Luxury Real Estate Agent</p>

            <div className="agent-contact">
              {/* Row 1: Two columns side by side */}
              <div className="contact-row contact-row--split">
                <div className="split-item">
                  <div className="contact-item">
                    <p className="contact-title">Primary phone</p>
                    <a className="agent-link" href="tel:(518) 578-1104" aria-label="call (518) 578-1104">
                      (518) 578-1104
                    </a>
                  </div>
                  <div className="contact-item">
                    <p className="contact-title">License Number</p>
                    #0999589
                  </div>
                </div>
              </div>

              {/* Row 2: Full width */}
              <div className="contact-row">
                <p className="contact-title">Email</p>
                <a className="agent-link" href="mailto:jessicawilliams@christiesrennj.com">
                  jessicawilliams@christiesrennj.com
                </a>
              </div>

              {/* Row 3: Full width */}
              <div className="contact-row">
                <p className="contact-title">Address</p>
                80 Hudson St,<br />
                Hoboken,<br />
                NJ 07030
              </div>
            </div>
          </div>

          {/* Footer: Social Icons + CTA */}
          <div className="content-footer">
            <ul className="lp-socials">
              <li>
                <a href="#" className="lp-socials__link socials__item" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <div className="icon-wrapper">
                    <img src={x_icon} alt="X" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="lp-socials__link socials__item" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <div className="icon-wrapper">
                    <img src={instagram_icon} alt="Instagram" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="lp-socials__link socials__item" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <div className="icon-wrapper">
                    <img src={facebook_icon} alt="Facebook" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="lp-socials__link socials__item" target="_blank" rel="noopener noreferrer" aria-label="WeChat">
                  <div className="icon-wrapper">
                    <img src={wechat_icon} alt="WeChat" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="lp-socials__link socials__item" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <div className="icon-wrapper">
                    <img src={youtube_icon} alt="YouTube" />
                  </div>
                </a>
              </li>
            </ul>

            <div className="cta">
              <a href="/about" className="lp-link lp-link--dark">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile2;
