import React from 'react';
import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <img src={logo} alt="Logo" className="w-auto h-auto mb-4" />
    <p>
      Curated tools, technologies, and resources for developers building modern software.
    </p>
    <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">GitHub</a>
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">LinkedIn</a>
    
  </nav>
  </aside>
  <nav>
    <h6 className="footer-title">PRODUCT</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
      </nav>
  <nav>
    <h6 className="footer-title">COMPANY</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">LEGAL</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    
  </nav>
</footer>

<footer className="footer sm:footer-horizontal bg-base-300 text-base-content items-center p-4">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © 2026 Dev Stack. All rights reserved.</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p>
      Privacy
    </p>
    <p>
      Terms
    </p>
    
  </nav>
</footer>

        </div>
    );
};

export default Footer;