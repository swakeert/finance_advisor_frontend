import React, { ReactNode } from 'react';
import './Features.scss';

import {
  FaChartPie,
  FaRegCalendarCheck,
  FaUmbrellaBeach,
} from 'react-icons/fa';
import { GiStairsGoal, GiTeacher, GiUmbrella } from 'react-icons/gi';
import { Card } from 'react-bootstrap';

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
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="features-title">
                What a financial advisor will do for you
              </h2>
              <p className="features-description">
                {/* An advisor will get to know you as a person and understand your
                financial journey. They will then analyse all aspects of your
                financial health and come up with a plan to achieve your goals. */}
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <FeatureCard
              title="Goal based investing"
              body="An advisor will work with you to understand your goals and
                      create a systematic investing plan (SIP) to achieve them."
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
              body="An advisor will understand your risk appetite and make sure your wealth is diversified accordingly."
              icon={<FaChartPie />}
            />

            {/* <FeatureCard
              title="Follow ups"
              body="An advisor will monitor your portfolio and regularly check in to make sure you are on track to meet your goals."
              icon={<FaRegCalendarCheck />}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
