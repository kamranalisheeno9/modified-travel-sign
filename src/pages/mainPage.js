import './mainPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, } from 'react-bootstrap';
import SingUp from './signup';
import Login from './login';
import { useState } from 'react';
const Layout = () => {

  const [display, setDisplay] = useState(true)

  const nav = ["Home", "About", "Package", "Travel", "Hotel", "Contact", "Login", "Sign Up",]

  const loginFunc = (item, e) => {
    if (item == "Login") {
      setDisplay(true)
    }
    else if (item == "Sign Up") {
      setDisplay(false)
    }

  }
  return (
    <div className="main-page">
      <Container className="nav">
        <Container>
          <Navbar expand="lg" collapseOnSelect={true} >
            <Navbar.Brand href="#home" className="logo">ABC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {nav.map((item, index) => {
                  return (
                    <Nav.Link key={index} onClick={(e) => loginFunc(item, e)} href="#features"><a> {item} </a></Nav.Link>

                  )
                })}

              </Nav>

            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Container>
      <Container className="container-layout" >
        <Row className="justify-content-between">
          <Col className="main-text" xs={12} sm={12} md={5}>
            <h4 className="welcome">Welcome To ABC</h4>
            <h1 className="main-title">Are You Looking For Amazing Places To Travel Around The Sri Lanka ?</h1>
            <h6 className="lower-text">ABC Provides You Best<br /> Facilities At Very Economic Cost.</h6>

          </Col>
          <Col xs={12} sm={6} md={5} className="login-signup">
            <div className={`${display ? " hidden " : " sign-up"} `}>
              <SingUp show={display} setShow={setDisplay} />
            </div>
            <div className={`${display ? "login" : "hidden"} `}>
              <Login />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Layout;
