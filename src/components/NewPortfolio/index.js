import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

import Tilt from 'react-vanilla-tilt'
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const NewPortfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  return (
      <div className="glassCardContainer">
        <div className="portfolio-page">
          <div className="text-zone animate__animated">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'My Portfolio'.split('')}
                idx={13}
              />
              <br />
            </h1>
          </div>
        </div>
        <Tilt style={{}} options='glare: true'>
          <div className="box" >
            <div className="elements bg"><FontAwesomeIcon icon={faGithub} className="fab fa-github fa-fw fa-2x fa-beat-fade"/></div>
            <div className="card"></div>
          </div>
        </Tilt>
        <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
      </div>    
  )
}

export default NewPortfolio;
