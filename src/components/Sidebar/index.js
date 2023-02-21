import { Link, NavLink } from 'react-router-dom';
import './index.scss';
// import LogoF from '../../assets/images/Letter-F-favicon.ico';
import LogoF from '../../assets/images/F-LOGO-002.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faImage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faSkype,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img
          src={LogoF}
          alt="logo"
          title="welcome to my website: Fizzo Pannosch | web developer"
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-f" color="#4d4d4e" /> */}
        {/* <FontAwesomeIcon icon={faFeatherPointed} color="#4d4d4e" /> */}
        {/* <FontAwesomeIcon icon={faF} color="#ffffcc" /> */}
        {/* <FontAwesomeIcon icon={faF} /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faImage} color="#4d4d4e" />
          {/* <FontAwesomeIcon icon="fa-solid fa-image"/> */}
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/newportfolio"
        >
          <FontAwesomeIcon icon={faImage} color="#4d4d4e" />
          {/* <FontAwesomeIcon icon="fa-solid fa-image"/> */}
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/fizzopannosch/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fizzo999"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCGXCf6XGMKxitLYtBePH03Q"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="skype:live:fizzo777" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
