import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Faq.scss';

type FaqCardProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProps): React.ReactElement => (
  <>
    <Col sm="6">
      <Card>
        <Card.Title>{question}</Card.Title>
        <Card.Body>{answer}</Card.Body>
      </Card>
    </Col>
  </>
);

const Faq = (): React.ReactElement => {
  return (
    <>
      <section className="home-section faq">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h2 className="home-section-title">FAQ</h2>
              <p className="home-section-description">
                {/* Here are some frquently asked questions and their answers. */}
              </p>
            </Col>
          </Row>

          <Row>
            <FaqCard
              question="What is Lorem Ipsum?"
              answer="Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete."
            />

            <FaqCard
              question="What is Lorem Ipsum?"
              answer="Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete."
            />

            <FaqCard
              question="What is Lorem Ipsum?"
              answer="Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete."
            />

            <FaqCard
              question="What is Lorem Ipsum?"
              answer="Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete."
            />

            <FaqCard
              question="What is Lorem Ipsum?"
              answer="Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete."
            />

            <FaqCard
              question="What is Lorem Ipsum?"
              answer="Lorem ipsum dolor sit amet, in mea nonumes dissentias dissentiunt, pro te solet iriure. Cu sit consetetur moderatius intellegam, ius decore accusamus Mutat convenirete."
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faq;
