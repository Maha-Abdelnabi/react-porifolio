import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials';
import Image  from "../../assets/11.png";


const Header = () => {
  return (
    <section className="header">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Maha Abdelnabi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div>
          <img src={Image} alt="me" className="me" />
        </div>
        <div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;