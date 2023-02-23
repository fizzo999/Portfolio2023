import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  faAngular,
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import herokuIcon from '../../assets/images/heroku.jpg'
// import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import RocketLoader from '../RocketLoader';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  const splitLetters = 'About me'.split('');

  return (
    <Fragment>
     {isLoading ? <RocketLoader/> : <Fragment>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={splitLetters}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I come from a diverse professional background:
            <ul>
              <li>
                <p>
                  I used to own my own event photography company with hundreds
                  of happy return customers for over 8 years. There I learned
                  the power of creating trust with my customers by providing 
                  consistenly exceptional quality in my work.
                </p>
              </li>
              <li>
                <p>
                  I also used to work as a general manager for a small
                  nutritional supplement company that produced its own products
                  with sales in exess of US$1M per year. Adding to my experience
                  of quality and trust I learned about customer service, sales,
                  promotions but also about warehouse, inventory and production
                  management.
                </p>
              </li>
              <li>
                <p>
                  I In my most recent adventure I worked as a banquet server and
                  bartender. There I learned to work under tight deadlines,
                  working in teams, communicating with event organizers, staff
                  as well clients - producing countless memorable moments with a
                  passion for quality of service - always with a smile.
                </p>
              </li>
            </ul>
          </p>
          <p>
            As a Software Developer I specialize in JavaScript and more
            specifically react for frontend as well as Express/Node.js for
            backend development combined with MongoDB or PostgreSQL. Through my
            training at a local boot camp - CodeFellows in Seattle - I discovered my new
            passion for software development. I love building beautiful digital
            products and I love learning new things, new technologies and see it
            all come together.
          </p>
          <p>
            I am looking for my next role in software development. Please reach
            out to contact me with your career opportunity. I am looking forward
            to meeting you.
          </p>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              {/* <FontAwesomeIcon icon={faAngular} color="#DD0031" /> */}
              <img src={herokuIcon} alt="heroku company icon" style={{width: '95%', display: 'flex', }}/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              <span className="icon-text">CSS</span>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGit} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
      </Fragment> } </Fragment>
  );
};

export default About;
