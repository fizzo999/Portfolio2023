import {
  faAngular,
  faCss3,
  faGit,
  faGitAlt,
  faGitSquare,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  const splitLetters = 'About me'.split('');

  return (
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
          mollitia magni nostrum, voluptatibus veniam doloribus recusandae quod
          omnis temporibus id molestias laudantium, eos, ab odio at nulla totam
          officiis ducimus? Labore laboriosam doloremque quas recusandae nisi
          aperiam itaque velit incidunt perferendis facilis harum accusamus
          aspernatur, cupiditate est laborum modi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
          mollitia magni nostrum, voluptatibus veniam doloribus recusandae quod
          omnis temporibus id molestias laudantium, eos, ab odio at nulla totam
          officiis ducimus? Labore laboriosam doloremque quas recusandae nisi
          aperiam itaque velit incidunt perferendis facilis harum accusamus
          aspernatur, cupiditate est laborum modi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
          mollitia magni nostrum, voluptatibus veniam doloribus recusandae quod
          omnis temporibus id molestias laudantium, eos, ab odio at nulla totam
          officiis ducimus? Labore laboriosam doloremque quas recusandae nisi
          aperiam itaque velit incidunt perferendis facilis harum accusamus
          aspernatur, cupiditate est laborum modi?
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#DD0031" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#DD0031" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
