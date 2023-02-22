import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

import Tilt from 'react-vanilla-tilt';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import FavoriteMoviesListAPP from '../../assets/images/mimzy.JPG';

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
            <div className="elements gh">
              <a href="https://github.com/fizzo999/movies-list-front-end" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={faGithub} className="fab fa-github fa-fw fa-4x fa-beat-fade githubIcon"  title="click to see it on GitHub..."/>
              </a>
            </div>            
            <div className="elements imgBox">
              <a href="https://favorite-movie-list.netlify.app/" target="_blank" rel="noreferrer" >
                <img src={FavoriteMoviesListAPP} alt="Favorite Movies List APP" title="search for your favorite movies and add them to a list... &#13;click to go to the deployed site"/>
              </a>
            </div>
            <div className="elements projectName">
              <h2 title="click to learn more...">Favorite Movies List APP</h2>
            </div>
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
