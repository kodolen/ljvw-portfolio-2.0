import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaJs, FaWordpress, FaGit } from 'react-icons/fa';
import { Waypoint } from "react-waypoint";

const About = () => {
  return (
    <div className="about-container" id="about-trigger">
      <Waypoint bottomOffset="400px" onEnter={() => {
        let currentElement = document.getElementById("about-trigger");
        currentElement.classList.add('show');
      }}
      />
      <div className="inner show-trigger">
        <div className="row">
          <div className="col-xs-12 col-md-10 off-md-1 col-lg-8 off-lg-2">
            <h2 className="about-container__title">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-10 off-md-1 col-lg-3 off-lg-2">
            <p className="about-container__quote">I love to write clean code and work with all the new techniques that the web has to offer.</p>
          </div>
          <div className="col-xs-12 col-md-10 off-md-1 col-lg-3 off-lg-2">
            <p className="about-container__text">I have graduated as a graphic and interactive designer at the Grafisch Lyceum Rotterdam and currently I have almost graduated from the study Creative Media and Game Technologies at the Rotterdam University of applied science. During this study I have worked on different projects in which I have worked with different technologies, frameworks and programming languages. But in the past years I've been heavily focusing on front-end development. <br></br><br></br>I also have some experience as a freelance web designer and web developer which I developed all my projects with React.js. I’m experienced with the use of Contentful, Netlify and Wordpress. In my projects I always make use of Sass and lately I’m using the BEM Methodology. I also have some experience with React Native.</p>
            <span className="about-container__link">Want to know more? <a href="mailto:lennartjvw@icloud.com" target="_blank" rel="noreferrer" className="about-container__link--hover link">send me a message</a></span>
          </div>
          <div className="col-xs-12 col-md-10 off-md-1 col-lg-8 off-lg-2">
            <p className="about-container__subtitle">I can work with:</p>
            <div className="about-container__programming-icons">
              <FaHtml5 />
              <FaCss3Alt />
              <FaSass />
              <FaReact />
              <FaJs />
              <FaWordpress />
              <FaGit />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default About;
