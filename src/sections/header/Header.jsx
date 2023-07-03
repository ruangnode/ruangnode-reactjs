import { useEffect } from 'react';
import HeaderImage from '../../assets/logo.jpg';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">RUANGNODE</h3>
        <p data-aos="fade-up">
          Trusted Validator & Interchain Utility Provider With few simple steps you can delegate funds to our trusted validators or explore our services where you can find tools that will be useful for node operators and developers.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
