import React, { Fragment, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
// import myPicture from '../../../src/assets/images/FizzoPannosch_Thank_You.gif';
// import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import Logo from './Logo';
import LogoSlobodan from './LogoSlobodan';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const greetingArray = 'my name is'.split('');
  const nameArray = 'Fizzo Pannosch'.split('');
  const jobArray = 'web developer'.split('');

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  return (
    <Fragment>
      <div className="container home-page">
        <div className="text-zone animate__animated">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={greetingArray}
              idx={13}
            />
            <br />
            {/* <img src={myPicture} alt="developer" style={{}}/> */}
            {/* <img src={LogoTitle} alt="developer" style={{}} /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript Expert / React Expert </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
        <LogoSlobodan />
      </div>
      <Loader type="pacman" />
    </Fragment>
  );
};

export default Home;
