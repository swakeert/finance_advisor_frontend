import React, { ReactNode } from 'react';
import './Features.scss';

import { FaChartPie, FaUmbrellaBeach } from 'react-icons/fa';
import {
  GiCalculator,
  GiStairsGoal,
  GiTeacher,
  GiUmbrella,
} from 'react-icons/gi';
import { Card, Col, Container, Row } from 'react-bootstrap';

type FeatureCardProps = {
  title: string;
  body: string;
  icon: ReactNode;
};

const FeatureCard = ({
  title,
  body,
  icon,
}: FeatureCardProps): React.ReactElement => (
  <>
    <Col lg="4" sm="6" className="feature-card-column">
      <Card bg="light">
        <div className="d-flex">
          <div className="flex-shrink-0 me-4">{icon}</div>
          <div className="flex-grow-1">
            <Card.Title>{title}</Card.Title>
            <Card.Body>{body}</Card.Body>
          </div>
        </div>
      </Card>
    </Col>
  </>
);

const Features = (): React.ReactElement => {
  return (
    <>
      <section className="home-section features">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h2 className="home-section-title">
                What a financial advisor will do for you
              </h2>
              <p className="home-section-description">
                A Fee Only Financial Planner has a fiduciary responsibility to
                provide unbiased and personalised advice. The planner does not
                receive any commissions from the products or services
                recommended.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center ">
            <FeatureCard
              title="Goal based investing"
              body="An advisor will work with you to understand your short and long term goals and create a financial plan to achieve them."
              icon={<GiStairsGoal />}
            />

            <FeatureCard
              title="Insurance Planning"
              body="An advisor will make sure you have adequte insurance cover so that life's uncertainities don't stop you from meeting your goals."
              icon={<GiUmbrella />}
            />

            <FeatureCard
              title="Retirement Planning"
              body="An advisor will help you start a retirement fund to achieve maximum compounding effects for an easy retirement."
              icon={<FaUmbrellaBeach />}
            />

            <FeatureCard
              title="Financial knowledge"
              body="An advisor will teach you about various financial instruments and make sure you only invest in what you understand."
              icon={<GiTeacher />}
            />

            <FeatureCard
              title="Risk management"
              body="An advisor will understand your assets, liabilities and risk appetite to help you diversify your wealth accordingly."
              icon={<FaChartPie />}
            />

            <FeatureCard
              title="Tax planning"
              body="An advisor will help you structure your finances and plan transactions for maximum tax efficiency."
              icon={<GiCalculator />}
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
