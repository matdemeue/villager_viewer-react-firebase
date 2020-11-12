import React, { } from 'react';

import './Footer.scss';

const Footer = ({children}) => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__info d-flex flex-column align-items-center">
              <p>An application for WebPGM3 made with React</p>
              <p>By Mathieu DM - Studio97</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
