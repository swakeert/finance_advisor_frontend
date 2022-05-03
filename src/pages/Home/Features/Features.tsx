import React from 'react';
import './Features.scss';

import { FaRocket } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const Features = (): React.ReactElement => {
  return (
    <>
      <section className="section features" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <Card>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <FaRocket />
                  </div>
                  <div className="flex-grow-1">
                    <Card.Title>Strategy Solutions</Card.Title>
                    <Card.Body>
                      We put a lot of effort in design, as it’s the ut
                      perspiciatis unde omnis iste natus error sit.
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <FaRocket />
                  </div>
                  <div className="flex-grow-1">
                    <Card.Title>Strategy Solutions</Card.Title>
                    <Card.Body>
                      We put a lot of effort in design, as it’s the ut
                      perspiciatis unde omnis iste natus error sit.
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <FaRocket />
                  </div>
                  <div className="flex-grow-1">
                    <Card.Title>Strategy Solutions</Card.Title>
                    <Card.Body>
                      We put a lot of effort in design, as it’s the ut
                      perspiciatis unde omnis iste natus error sit.
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <FaRocket />
                  </div>
                  <div className="flex-grow-1">
                    <Card.Title>Strategy Solutions</Card.Title>
                    <Card.Body>
                      We put a lot of effort in design, as it’s the ut
                      perspiciatis unde omnis iste natus error sit.
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-lg-4 col-sm-6">
              <Card>
                <div className="d-flex">
                  <div className="flex-shrink-0 me-4">
                    <FaRocket />
                  </div>
                  <div className="flex-grow-1">
                    <Card.Title>Strategy Solutions</Card.Title>
                    <Card.Body>
                      We put a lot of effort in design, as it’s the ut
                      perspiciatis unde omnis iste natus error sit.
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
