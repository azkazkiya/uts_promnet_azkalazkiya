// src/pages/LandingPage.js
import React from 'react';
import './Home.css'; // Gantilah dengan nama file CSS yang sesuai
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Typed from 'react-typed'; // Import react-typed library
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AboutHome from './AboutHome';
import Gallery from './Gallery';

function Home() {
  const [descriptionRef, descriptionInView] = useInView({
    triggerOnce: true,
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1700 },
  });

  return (
    <div className="page">
      {/* Komponen Typed dengan animasi teks yang diketik */}
      <Typed
        strings={['Welcome to My Portfolio!', 'I Am Azkal Azkiya Alfiandri', 'Connect with me.']}
        typeSpeed={30}
        backSpeed={30}
        backDelay={1500}
        showCursor
        cursorChar="|"
        className="typed-text"
      	style={{
          display: 'block', padding: '5rem', backgroundImage: 'linear-gradient(to bottom, #4F6F52, #92ad91)', 
          margin: '0', fontSize:'60px', color: '#ECE3CE',
        }}
      />

      <animated.div
        ref={descriptionRef}
        style={{ ...descriptionSpring, margin: '20px 0' }}
        className="description"
      >
        <p style={{padding:'5px 75px'}}>
          Welcome to my portfolio! Hi, I'm Azkal Azkiya Alfiandri. I am a student at Universitas Pendidikan Indonesia majoring in computer science education. I have a hobby of reading and listening to music. I am very interested in education and humanity. 
        </p>
        <p>Have a nice day!</p>
      </animated.div>


      {/* Komponen About dan Gallery */}
      <AboutHome />
      <Gallery />
    </div>
  );
}

export default Home;
