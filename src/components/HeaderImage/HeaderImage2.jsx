import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import leftimage from './emblem.png';
import rightimage from './logo-left.png'
import './HeaderImage.css'

const HeaderImage = () => {
  return (
    <header>
      <Container fluid >
        <Row className="align-items-center mb-2 mt-2">
          <Col xs={4} md={2} className="text-center mb-3 mb-md-0">
          <Image
      src={leftimage}
      fluid
      rounded
      style={{ height: '70px', width: '60px' }}
    />
          </Col>
          <Col xs={12} md={8} className="text-center mb-3 mb-md-0">
            <h1 className="ag-heading">ACCOUNTANT GENERAL {'(A & E),'} KERALA</h1>
            <h2 className="ag-desc">Field Office of the Supreme Audit Institution of India,The Comptroller and Auditor General of India</h2>
          </Col>
          <Col xs={4} md={2} className="text-center">
          <Image 
      src={rightimage}
      fluid
      rounded
      style={{ height: '70px', width: '60px' }}
    />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderImage;
