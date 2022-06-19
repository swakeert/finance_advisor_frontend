import FindAdvisorForm from 'components/FindAdvisorCTA/FindAdvisorForm/FindAdvisorForm';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import './FindAdvisorCTA.scss';

export default (): React.ReactElement => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = (): void => setShowModal(false);
  const handleShowModal = (): void => setShowModal(true);

  return (
    <>
      <div className="find-advisor-cta">
        <Button variant="dark" onClick={handleShowModal}>
          Find an advisor <FaArrowRight />
        </Button>
      </div>

      <Modal
        show={showModal}
        fullscreen="sm-down"
        onHide={handleCloseModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Great! Tell us a bit about you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FindAdvisorForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
