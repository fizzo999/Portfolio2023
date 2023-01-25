import {
  faAngular,
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  const splitLetters = 'About me'.split('');

  return (
    <Fragment>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
            mollitia magni nostrum, voluptatibus veniam doloribus recusandae
            quod omnis temporibus id molestias laudantium, eos, ab odio at nulla
            totam officiis ducimus? Labore laboriosam doloremque quas recusandae
            nisi aperiam itaque velit incidunt perferendis facilis harum
            accusamus aspernatur, cupiditate est laborum modi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
            mollitia magni nostrum, voluptatibus veniam doloribus recusandae
            quod omnis temporibus id molestias laudantium, eos, ab odio at nulla
            totam officiis ducimus? Labore laboriosam doloremque quas recusandae
            nisi aperiam itaque velit incidunt perferendis facilis harum
            accusamus aspernatur, cupiditate est laborum modi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
            mollitia magni nostrum, voluptatibus veniam doloribus recusandae
            quod omnis temporibus id molestias laudantium, eos, ab odio at nulla
            totam officiis ducimus? Labore laboriosam doloremque quas recusandae
            nisi aperiam itaque velit incidunt perferendis facilis harum
            accusamus aspernatur, cupiditate est laborum modi?
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
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
      <Loader type="pacman" />
    </Fragment>
  );
};

export default About;
