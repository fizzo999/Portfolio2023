import React, { Fragment, useState } from 'react';
// import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
// import Card from '../Card';
import './index.scss';
// import OlympiaCapitolLake from '../../assets/images/Olympia_Capitol_Lake_small.jpg';
// import video1 from '../../assets/images/travelDestinations.mp4';
// import video2 from '../../assets/images/slackBot.mp4';
// import video3 from '../../assets/images/music-lyfe.mp4';
// import video4 from '../../assets/images/toDoApp.mp4';
// import video5 from '../../assets/images/storeFront.mp4';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  // const mp4Array = [video1, video2, video3, video4, video5];

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  return (
    <Fragment>
      <div className="portfolio-banner">
        FIZZO PANNOSCH <br />
        <span className="web-dev">WEB DEVELOPER</span>
      </div>
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
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <div className="card-container">
          {mp4Array.map((eachMp4, idx) => {
            return <Card key={`card_${idx}`} mp4={eachMp4} />;
          })}
        </div> */}
      </div>
      {/* <Loader type="pacman" /> */}
          {/* <video autoplay loop muted plays-inline width="100%">
						<source src={favoriteMoviesPreview} type="video/mp4" alt="video animation of favorite movies list app website"/>
					</video> */}
          {/* <Iframe source={"https://www.youtube.com/watch?v=_6U3FZsxwGI&t=27s"} title={"video animation of favorite movies list app website"}/> */}
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_6U3FZsxwGI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title={"video animation of favorite movies list app website"}></iframe> */}
    </Fragment>
  );
};

export default Portfolio;
