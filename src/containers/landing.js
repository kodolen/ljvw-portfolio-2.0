import Img from '../assets/img/cutout-len.png'
import { Link } from 'react-scroll'

import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-container__intro_wrapper">
                <div className="row full-height">
                    <div className="col-xs-12 col-md-10 off-md-1 col-lg-8 off-lg-2 full-height">
                        <div className="landing-container__intro_wrapper_inner">
                            <div className="landing-container__img-wrapper">
                                <div className="landing-container__overlay"></div>
                                <img className="landing-container__img" src={Img} alt="" />
                            </div>
                            <div className="landing-container__intro">
                                <span className="landing-container__subtitle">Lennart van Welzen</span>
                                <h1 className="landing-container__title">FRONT-END DEVELOPER</h1>
                                <p className="landing-container__text">Hey! I’m Lennart. I'm a Dutch front-end developer based in Rotterdam. At this moment I’m looking for a job as a front-end developer.</p>
                                <div className="landing-container__button-wrapper">
                                    <Link to="about-trigger" spy={true} smooth={true} className="button primary">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="landing-container__social-icons">
                <a href="https://github.com/kodolen" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/lennart-van-welzen-b4ab42134/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                <a href="mailto:lennartjvw@icloud.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
            </div>
        </div>
    );
}

export default Landing;
