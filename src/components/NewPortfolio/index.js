import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Tilt from 'react-parallax-tilt';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import FavoriteMoviesListAPP from '../../assets/images/mimzy.JPG';
import movieProjector from '../../assets/images/movie-projector.gif';
import RocketLoader from '../RocketLoader';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import favoriteMoviesPreview from '../../assets/images/favoriteMoviesListPreviewSmall.mp4'
// import Iframe from '../Iframe';

const NewPortfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, []);

  return (
    <Fragment>
      {isLoading ? 
        <RocketLoader/> : 
        <div className="glassCardContainer" title="hover over the card to see MORE...">
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
          <Tilt 
            // style={{}} 
            className="parallax-effect-glare-scale"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}>
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
                <h2 title="click to learn more..." onClick={handleShow} className="modalButton">Favorite Movies List APP</h2>
                {/* <h2 className="modalButton">Favorite Movies List APP</h2> */}
              </div>
              <div className="card"><img src={movieProjector} alt="a movie projector running and displaying the opening title on a screen"/>  </div>
            </div>
          </Tilt>
          <Link to="/contact" className="flat-button">
              CONTACT ME
          </Link>
          <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter"
      centered backdropClassName="projectModalBackdrop">
        <Modal.Header>
          <h4>Favorite Movie List App</h4>
        </Modal.Header>
        <Modal.Body>
          {/* <video autoplay loop muted plays-inline width="100%">
						<source src={favoriteMoviesPreview} type="video/mp4" alt="video animation of favorite movies list app website"/>
					</video> */}
          {/* <Iframe source={"https://www.youtube.com/watch?v=_6U3FZsxwGI&t=27s"} title={"video animation of favorite movies list app website"}/> */}
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_6U3FZsxwGI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title={"video animation of favorite movies list app website"}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>}
    </Fragment>
  )
}

export default NewPortfolio;
