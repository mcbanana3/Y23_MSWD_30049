import React from 'react'
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

export default function CardLayout1() {
  return (
    <div>
        <Container >
        <Row>
          <Col className='col-12' text-center py="4">
            <h1>Our Courses</h1>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg="3" md="6">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../Pics/pic1.jpg')} style={{height:'200px', width:'100%'}}/>
              <Card.Body>
              <Card.Title>MSWD</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../Pics/pic2.jpg')} style={{height:'200px', width:'100%'}}/>
              <Card.Body>
              <Card.Title>AIML</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../Pics/pic3.jpg')} style={{height:'200px', width:'100%'}}/>
              <Card.Body>
              <Card.Title>DBMS</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={require('../Pics/pic1.jpg')} style={{height:'200px', width:'100%'}}/>
              <Card.Body>
              <Card.Title>AOOP</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}