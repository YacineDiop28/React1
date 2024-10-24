// src/App.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Name from './name';
import Price from './price';
import Description from './Description';
import Image from './image';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const firstName = "Yacine"; 

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Image />
            </Col>
            <Col md={6}>
              <Name />
              
              <Price />
              <Description />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {firstName ? (
        <h5 className="mt-3">Bonjour, {firstName}!</h5>
      ) : (
        <h5 className="mt-3">Bonjour!</h5>
      )}
      {firstName && <Image />}
    </Container>
  );
};

export default App;
