// src/pages/Home.js
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Typed from 'react-typed'; // Import react-typed library
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

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
        style={{ ...descriptionSpring,  margin: '20px 0', }}
        className="description"
      >
        <p>
        Welcome to my portfolio! I Am Azkiya and here you can dive into my journey from the last few years. 
        </p>
        <p>
        Have a nice day!
        </p>
      </animated.div>

      
    </div>
  );
}

export default Home;
