import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Testimonials.scss';

const Testimonials = (): React.ReactElement => {
  return (
    <>
      <section className="home-section bg-light process" id="process">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <div className="mb-4">
                <img
                  src="quote-icon.png"
                  alt="quote"
                  className="mx-auto d-block"
                />
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col lg="8" className="text-center">
              <div>
                <h4 className="testi-text">
                  Working with a financial advisor allowed me to better
                  understand my finances, risk profile and overall financial
                  health. By ensuring my emergency funds were safely stowed
                  away, dividing my savings and investments into various risk
                  profiles based on my goals and getting insurance cover for all
                  of life&#39;s uncertainities, I was able to fulfill my dream
                  of taking an year off, travel and now embark on my
                  entrepreneurial journey to bring this joy to more people.
                </h4>
                <div>
                  <div className="mt-4 mb-2">
                    <img
                      src="swakeert.jpg"
                      alt="testi-user"
                      className="rounded-circle mx-auto d-block testi-img"
                    />
                  </div>
                  <p>
                    <strong>Swakeert Jain</strong> <br />
                    CEO &amp; Founder of This company
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Testimonials;
