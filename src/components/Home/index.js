import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import myPicture from '../../../src/assets/images/FizzoPannosch_Thank_You.gif';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const greetingArray = ['m', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's'];
  const nameArray = [
    'F',
    'i',
    'z',
    'z',
    'o',
    ' ',
    'P',
    'a',
    'n',
    'n',
    'o',
    's',
    'c',
    'h',
  ];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  return (
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
    </div>
  );
};

export default Home;
