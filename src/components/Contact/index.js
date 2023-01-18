import { Fragment, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  return (
    <Fragment>
      <div className="conatiner contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'Contact me'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p className="contact-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            soluta cum blanditiis debitis, dolores a ipsum quibusdam, atque,
            quae aperiam nobis vero eos velit ratione minus doloribus est
            dignissimos repellendus.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    id=""
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  );
};

export default Contact;
