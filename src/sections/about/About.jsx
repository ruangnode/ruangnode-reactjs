import AboutImage from '../../assets/team.png';
// import CV from '../../assets/cv.pdf';
// import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h3>Why RuangNode ? </h3>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <h4>RuangNode</h4>
          <small>
            is an experienced POS validator and staking provider, contributing to Cosmos Ecosystem open-source projects, and offering valuable data analytics, scripting tools & services that have earned recognition from prominent crypto
            projects.
          </small>
          {/* <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
