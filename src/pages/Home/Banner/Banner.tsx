import React from 'react';
import './Banner.scss';

import { FaArrowRight } from 'react-icons/fa';
import { Button, Row, Col, Container } from 'react-bootstrap';

const Banner = (): React.ReactElement => {
  return (
    <>
      <section className="home-banner-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg="7">
              <div className="home-wrapper text-center">
                <div className="text-tran-box">
                  <h1 className="text-transparent">
                    Start your journey to financial freedom today
                  </h1>
                </div>
                <p>
                  {/* Work with a financial advisor to create a personalised
                  financial plan to make your money work for you. */}
                  Connect with a SEBI approved, fee only financial advisor to
                  create a financial plan peronalised to your situation and to
                  meet your individual goals.
                </p>

                <Button variant="dark" href="#" className="banner-cta">
                  Find an advisor <FaArrowRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="position-relative">
        <div className="home-banner-shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;
