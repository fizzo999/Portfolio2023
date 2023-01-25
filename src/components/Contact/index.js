import { Fragment, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const refForm = useRef();

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully');
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again');
        }
      );
  };

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
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
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
        <div className="info-map">
          Fizzo Pannosch,
          <br />
          Olympia, WA <br />
          USA <br />
          <span>friedrichpannosch@yahoo.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[47.035942, -122.904445]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.035942, -122.904445]}>
              <Popup>
                This is our beautiful WA state capitol. I live close by. Contact
                me and we can grab a cup of coffee and walk around capitol lake
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  );
};

export default Contact;
