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
    <div className="col-lg-4 col-sm-6">
      <Card bg="light">
        <div className="d-flex">
          <div className="flex-shrink-0 me-4">{icon}</div>
          <div className="flex-grow-1">
            <Card.Title>{title}</Card.Title>
            <Card.Body>{body}</Card.Body>
          </div>
        </div>
      </Card>
    </div>
  </>
);

const Features = (): React.ReactElement => {
  return (
    <>
      <section className="section features" id="features">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h2 className="features-title">
                What a financial advisor will do for you
              </h2>
              <p className="features-description">
                {/* An advisor will get to know you as a person and understand your
                financial journey. They will then analyse all aspects of your
                financial health and come up with a plan to achieve your goals. */}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center row-flex">
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
