import React from 'react';
import './Banner.scss';

import { FaArrowRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Banner = (): React.ReactElement => {
  return (
    <>
      <section className="section home" id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="home-wrapper text-center">
                <div className="text-tran-box">
                  <h1 className="text-transparent">
                    Start your journey to financial freedom today
                  </h1>
                </div>
                <p>
                  {/* Work with a financial advisor to create a personalised
                  financial plan to make your money work for you. */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec justo et dolor convallis condimentum ac et nisi.
                  Fusce ullamcorper sollicitudin felis, sit amet sollicitudin
                  elit.
                </p>

                <Button variant="dark" href="#" className="get-started-cta">
                  Get Started <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
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
