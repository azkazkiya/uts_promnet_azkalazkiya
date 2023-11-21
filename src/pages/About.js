// src/pages/About.js
import React from 'react';
import './About.css';
import { Card, ListGroup } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Profil from '../images/pict1.jpg'
function About() {
  // Animasi untuk bagian foto dan deskripsi
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
  });

  const containerSpring = useSpring({
    opacity: containerInView ? 1 : 0,
    transform: containerInView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 },
  });

  return (
    <div className='aboutpage'>
        <animated.div
        className="about-container"
        style={containerSpring}
        ref={containerRef}
        >
          <div className="about-left">
            <img
              src={Profil}
              alt="Profile"
              style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}} // Adding border-radius and shadow to the profile image
            />
          </div>
    
          <div className="about-right" style={{ marginLeft: '20px' }}> {/* Adding margin to separate the image and text */}
            
            <p>
              Hi, I'm Azkal Azkiya Alfiandri. I am a student at Universitas Pendidikan Indonesia majoring in computer science education. I have a hobby of reading and listening to music. I am very interested in education and humanity. 
            </p>
        

            {/* Education */}
            <Card className="mt-4" style={{ borderColor: '#333' }}>
              <Card.Header style={{ backgroundColor: '#333', color: '#fff' }}> {/* Changing header background and text color */}
                <h3>Education</h3>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>[2022 - now] - [Universitas Pendidikan Indonesia]</ListGroup.Item>
                <ListGroup.Item>[2019 - 2022] - [SMK Negeri 4 Payakumbuh]</ListGroup.Item>
                <ListGroup.Item>[2016 - 2019] - [SMP Negeri 1 Kecamatan Harau]</ListGroup.Item>
              </ListGroup>
            </Card>

            {/* Contact */}
            <Card className="mt-4" style={{ borderColor: '#333', margin:'20 px 20px' }}>
              <Card.Header style={{ backgroundColor: '#333', color: '#fff' }}> {/* Changing header background and text color */}
                <h3>Contact</h3>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Email: your.email@example.com</ListGroup.Item>
                <ListGroup.Item>LinkedIn: linkedin.com/in/your-profile</ListGroup.Item>
                {/* Add more contact details as needed */}
              </ListGroup>
            </Card>
          </div>
    </animated.div>
    </div>
    
  );
}

export default About;
