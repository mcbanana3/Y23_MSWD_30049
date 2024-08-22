import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarRef() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">KL Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">KL LMS</Nav.Link>
            <Nav.Link href="#features">KLU ERP</Nav.Link>
            <Nav.Link href="#pricing">KLU WEB</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarRef;