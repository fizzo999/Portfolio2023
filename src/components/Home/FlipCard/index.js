import { Fragment } from 'react';
import './index.scss';
import github from '../../../../src/assets/images/gh.png';
import linkedin from '../../../../src/assets/images/li.png';

const FlipCard = () => {
  return (
    <Fragment>
      <section className="about-Fizzo-wrapper">
        <div className="about-card-container">
          <div className="about-card">
            <div className="side Fizzo_001"></div>
            <div className="side back">
              <div>
                <h3>About Fizzo Pannosch the software developer</h3>
                <p>
                  Fullstack JavaScript developer with a background in
                  Hospitality, Production Managment, Nutrition and Gardening.
                  Passionate about writing accessible, intuitive, and easy to
                  read code. I want to build products that are inspiring,
                  improving the lives of people and are future forward.
                </p>
              </div>
              <div className="connect">
                <a
                  href="https://github.com/fizzo999"
                  alt="Fizzo`s github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src={github} alt="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fizzopannosch/"
                  alt="Fizzo`s linkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="social-icon" src={linkedin} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FlipCard;
