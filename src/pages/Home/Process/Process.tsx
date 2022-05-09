import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Process.scss';

type ProcessStepProps = {
  stepNumber: number;
  title: string;
  body: string;
};

const ProcessStep = ({
  stepNumber,
  title,
  body,
}: ProcessStepProps): React.ReactElement => (
  <>
    <Col lg="6">
      <Card bg="light">
        <span className="number">{stepNumber}</span>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card>
    </Col>
  </>
);

const Process = (): React.ReactElement => {
  return (
    <>
      <section className="home-section bg-light process" id="process">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h2 className="home-section-title">How it works</h2>
              <p className="home-section-description">
                {/* Working with a financial advisor is a simple three step process */}
              </p>
            </Col>
          </Row>

          <Row>
            <ProcessStep
              stepNumber={1}
              title="Find an advisor"
              body="In the initial consultation, you will get to know each
                    other&#39;s financial journey and goals. In your first
                    consultation with an advisor, you and the advisor will
                    explain your respective backgrounds and experiences. The
                    advisor would then explain what working with them would be
                    like and quote their fees."
            />
            <ProcessStep
              stepNumber={2}
              title="Initial consultation"
              body="In the initial consultation, you will get to know each
                    other&#39;s financial journey and goals. In your first
                    consultation with an advisor, you and the advisor will
                    explain your respective backgrounds and experiences. The
                    advisor would then explain what working with them would be
                    like and quote their fees."
            />
            <ProcessStep
              stepNumber={3}
              title="Sign contract and pay fees"
              body="In the initial consultation, you will get to know each
                    explain your respective backgrounds and experiences. The
                    advisor would then explain what working with them would be
                    like and quote their fees."
            />
            <ProcessStep
              stepNumber={4}
              title="Risk assessment and information sharing"
              body="In the initial consultation, you will get to know each
                    other&#39;s financial journey and goals. In your first
                    consultation with an advisor, you and the advisor will
                    explain your respective backgrounds and experiences. The
                    advisor would then explain what working with them would be
                    like and quote their fees."
            />
            <ProcessStep
              stepNumber={5}
              title="Hollistic Financial plan and next steps"
              body="In the initial consultation, you will get to know each
                    other&#39;s financial journey and goals. In your first
                    consultation with an advisor, you and the advisor will
                    explain your respective backgrounds and experiences. The
                    advisor would then explain what working with them would be
                    like and quote their fees."
            />
            <ProcessStep
              stepNumber={6}
              title="Regular follow ups"
              body="An advisor will monitor your portfolio and regularly check
                    in to make sure you are on track to meet your goals."
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Process;
