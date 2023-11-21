// src/components/GalleryCarousel.js
import React from 'react';
import './Gallery.css';
import { Carousel } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import SMK from '../images/smk4.jpg';
import UNIV from '../images/upi.jpeg';
import poto2 from '../images/poto2.jpg';
import poto3 from '../images/poto3.jpg';
import poto4 from '../images/poto4.jpg';
import poto5 from '../images/poto5.jpg';

function Gallery({ itemsGallery, itemsCarousel }) {
  // Efek parallax untuk galeri
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
  });

  const gallerySpring = useSpring({
    opacity: galleryInView ? 1 : 0,
    transform: galleryInView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 },
  });

  // Efek parallax untuk carousel
  const carouselSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    
    <div className='gallerypage'>
      <h3>My Gallery</h3> <br />
      <animated.div style={{ ...carouselSpring, margin: '2px 2px', }} className='caro'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SMK}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>SMKN 4 Payakumbuh</h3>
              <p>My 'home' in 2019-2022</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={UNIV}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Universitas Pendidikan Indonesia</h3>
              <p>My beloved 'home' at the moment</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </animated.div>
      <animated.div
        ref={galleryRef}
        style={{ ...gallerySpring }}
        className="galleryCard"
      >
        <div className="gallery-images">
          <figure>
            <img
              src={poto5}
              alt="Project 1"
              width="400"
              height="300"
              className="hover-effect"
            />
            <figcaption>Hello this is me!</figcaption>
          </figure>
          <figure>
            <img
              src={poto2}
              alt="Project 2"
              width="400"
              height="300"
              className="hover-effect"
            />
            <figcaption>My Beloved Friends</figcaption>
          </figure>
          <figure>
            <img
              src={poto4}
              alt="Project 3"
              width="400"
              height="300"
              className="hover-effect"
            />
            <figcaption>Friends who were once my classmates</figcaption>
          </figure>
          <figure>
            <img
              src={poto3}
              alt="Project 3"
              width="400"
              height="300"
              className="hover-effect"
            />
            <figcaption>People that I feel most comfortable with</figcaption>
          </figure>
        </div>
      </animated.div>
    </div>
  );
}

export default Gallery;
