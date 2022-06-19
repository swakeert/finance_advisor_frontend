import { GlobalRoutes } from 'core/routes';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default (): React.ReactElement => {
  return (
    <>
      <div className="position-relative">
        <div className="home-banner-shape overflow-hidden text-footer">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="#343a40"
            />
          </svg>
        </div>
      </div>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <Link to={GlobalRoutes.HOME}>
                <Image src="logo512.png" className="logo" alt="Logo" />
              </Link>
              <p className="about-text mt-4 pt-1">
                Helping you find a financial advisor and start on your journey
                to financial freedom today.
              </p>
            </Col>

            <Col lg="2" sm="6">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to={GlobalRoutes.ABOUT}>About Us</Link>
                </li>
                <li>
                  <Link to={GlobalRoutes.CONTACT}>Contact Us</Link>
                </li>
              </ul>
            </Col>

            <Col lg="2" sm="6">
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to={GlobalRoutes.PRIVACY_POLICY}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={GlobalRoutes.TERMS_AND_CONDITIONS}>
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </Col>

            <Col lg="4">
              <div>
                <h5>Contact us</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong className="font-secondary font-14">Address:</strong>{' '}
                    795 Folsom Ave, Suite 600 CA 94107
                  </li>
                  <li>
                    <strong className="font-secondary font-14">Phone:</strong>{' '}
                    (123) 456-7890, 123-4567 89{' '}
                  </li>
                  <li>
                    <strong className="font-secondary font-14">Email:</strong>{' '}
                    <a href="mailto:first.last@example.com">
                      first.last@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="footer-alt">
          <Container>
            <Row>
              <Col sm="6">
                <p className="font-13 copyright">
                  © {new Date().getFullYear()} Find an advisor Company
                </p>
              </Col>
              <Col sm="6">
                <ul className="list-inline footer-social-one">
                  <li className="list-inline-item">
                    <a href="/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};
