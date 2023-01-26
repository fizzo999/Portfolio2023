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
                <h3>
                  I am a Fullstack JavaScript developer with a background in
                  <ul>
                    <li>Hospitality,</li>
                    <li>Production Managment,</li>
                    <li>Digital Event Photography,</li>
                    <li>Nutrition and </li>
                    <li>Gardening.</li>
                  </ul>
                  I am passionate about writing accessible, intuitive, and easy
                  to read code. I am building products and services that are
                  beautiful, inspiring and are future forward.
                </h3>
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
