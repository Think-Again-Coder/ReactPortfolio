import React from 'react';
import './index.scss';
//two icons were created for linking to my profile page
const Footer = () => (
  <footer>
    <div className="icons">
      <a href="https://github.com/Think-Again-Coder" className="icon-link" target="inline">
        <i className="github" />
      </a>
      <a href="https://linkedin.com" className="icon-link">
        <i className="linkedin" />
      </a>
    </div>
  </footer>
);

export default Footer;