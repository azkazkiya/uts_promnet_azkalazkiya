// src/pages/Contact.js
import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [formRef] = useInView({
    triggerOnce: true,
  });

  const formSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
       <Container className="my-5 customContainer" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Row>
        <Col>
          <h2>Contact Me!</h2>
          <p>Feel free to reach out</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} ref={formRef}>
          <animated.div style={formSpring}>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: '#4F6F52', border: 'none' }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#3A4D29'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4F6F52'}
              >
                Submit
              </Button>
            </Form>
          </animated.div>
        </Col>

        <Col md={6}>
          <animated.div style={formSpring}>
            <address>
              <strong>Universitas Pendidikan Indonesia</strong><br />
              Jalan Dr Setiabudhi No 229. Kota/Kabupaten, Kota Bandung. <br />
              Kode Pos, 40154<br />
              
            </address>
          </animated.div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <h3>Connect With Me</h3>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={4}>
          <animated.div style={formSpring} className="social-icon">
            <a href="https://www.instagram.com/aazkiyaz/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <p>Instagram</p>
            </a>
          </animated.div>
        </Col>

  
        <Col md={4}>
          <animated.div style={formSpring} className="social-icon">
            <a href="https://www.linkedin.com/in/azkalazkiyaalfiandri/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
          </animated.div>
        </Col>
      </Row>
    </Container>

   
  );
}

export default Contact;
