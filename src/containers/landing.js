import Img from '../assets/img/cutout-len.png'

import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-container__img-wrapper">
                <img className="landing-container__img" src={Img} alt="" />
            </div>
            <div className="landing-container__intro">
                <span className="landing-container__subtitle">Lennart van Welzen</span>
                <h1 className="landing-container__title">FRONT-END DEVELOPER</h1>
                <p className="landing-container__text">Hey! I’m Lennart. I'm living in Rotterdam. At this moment I’m looking for an internship as a front-end developer.</p>
            </div>
            <div className="landing-container__social-icons">
                <FaGithub />
                <FaLinkedinIn />
                <FaEnvelope />
            </div>
        </div>
    );
}

export default Landing;
