import W4m from '../assets/img/w4m.png'
import Ljvw from '../assets/img/ljvw-dev.png'
import W4mWeb from '../assets/img/w4m-web.png'
import LjvwWeb from '../assets/img/ljvw-web.png'
import RedKiwi from '../assets/img/redkiwi.png'
import GL from '../assets/img/GL.png'

import W4mLogo from '../assets/logo/logo-w4m.png'
import LjvwDevLogo from '../assets/logo/ljvw-dev-logo.png'
import RedKiwiLogo from '../assets/logo/rk-logo.png'
import GlLogo from '../assets/logo/gl-logo.png'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Cases = () => {
  return (
    <div className="cases-container">
      <div className="inner">
        <div className="row">
          <div className="col-xs-12 col-sm-10 off-sm-1 col-md-6 off-md-2">
            <h2 className="cases-container__title">Cases</h2>
            <p className="cases-container__text">In the past years I have worked on different projects. The projects shown below are school projects but also projects I did as an intern or a freelancer. I also have more projects on my Github page.</p>
            <span className="about-container__link">Check out my <a href="#" className="about-container__link--hover link">Github page</a></span>
          </div>
          <div className="col-xs-12 col-sm-10 off-sm-1 col-md-8 off-md-2">
            <div className="cases-container__wrapper">
              <a href="https://work4media.nl/" target="_blank">
                <div className="cases-container__overlay">
                  <img src={W4mLogo} />
                  <span className="cases-container__subtitle">Freelance</span>
                </div>
                <div className="cases-container__case" style={{ backgroundImage: `url(${W4mWeb})` }}></div>
              </a>
              <a href="https://develop.ljvw.nl/" target="_blank">
              <div className="cases-container__overlay">
                  <img src={LjvwDevLogo} />
                  <span className="cases-container__subtitle">Freelance</span>
                </div>
                <div className="cases-container__case" style={{ backgroundImage: `url(${LjvwWeb})` }}></div>
              </a>
              <a href="https://store.steampowered.com/app/1203680/Guiding_Light/" target="_blank" className="no-margin-bot">
              <div className="cases-container__overlay">
                  <img src={RedKiwiLogo} />
                  <span className="cases-container__subtitle">Internship</span>
                </div>
                <div className="cases-container__case" style={{ backgroundImage: `url(${RedKiwi})` }}></div>
              </a>
              <a href="https://work4media.nl/" target="_blank" className="no-margin-bot">
              <div className="cases-container__overlay">
                  <img src={GlLogo} />
                  <span className="cases-container__subtitle">School project</span>
                </div>
                <div className="cases-container__case" style={{ backgroundImage: `url(${GL})` }}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Cases;
