import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaJs, FaWordpress, FaGit } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="inner">
        <div className="row">
          <div className="col-xs-12 col-sm-10 off-sm-1 col-md-8 off-md-2">
            <h2 className="about-container__title">About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 off-sm-1 col-md-4 off-md-2">
            <p className="about-container__quote">I love to work with the newest technologies</p>
          </div>
          <div className="col-xs-12 col-sm-10 off-sm-1 col-md-4">
            <p className="about-container__text">I have graduated as a graphic and interactive designer at the Grafisch Lyceum Rotterdam and currently I’m following the study Creative Media and Game Technologies at the Rotterdam University of applied science. During this study I have worked on different projects in which I have worked with different technologies, frameworks and programming languages. <br></br><br></br>In the past years I've been heavily focusing on front-end development. At this moment I’m in my last year and I’m looking for a graduation internship. I’m also active as a freelance web designer and web developer which has a positive effect on my development as a developer.</p>
            <span className="about-container__link">Want to know more? <a href="#" className="about-container__link--hover">send me a message</a></span>
          </div>
          <div className="col-xs-12 col-sm-10 off-sm-1 col-md-8 off-md-2">
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
