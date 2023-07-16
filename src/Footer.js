import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="getintouch">GET IN TOUCH</div>
      <div className="icons">
        <span className="github">
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
        <span className="gmail">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
      </div>
      <div className="creator">Created and Designed by Aayush Yadav</div>
      <hr className="line" />
      <div className="copyright">
        Copyright © 2023. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
