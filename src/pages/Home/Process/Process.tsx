import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRocket } from 'react-icons/fa';
import './Process.scss';

// type ProcessCardProps = {
//   title: string;
//   body: string;
//   cardNumber: number;
// };

// const ProcessCard = ({
//   title,
//   body,
//   cardNumber,
// }: ProcessCardProps): React.ReactElement => (
//   <>
//     <div className="col-sm-4">
//       <Card bg="light" className="text-center">
//         <div className="avatar-xl mx-auto mb-4">
//           <div className="avatar-title text-primary h4 m-0 box-shadow rounded-circle bg-white">
//             {cardNumber}
//           </div>
//         </div>
//         <Card.Title>{title}</Card.Title>
//         <Card.Body>{body}</Card.Body>
//       </Card>
//     </div>
//   </>
// );

// const Process = (): React.ReactElement => {
//   return (
//     <>
//       <section className="section bg-light process" id="process">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12 text-center">
//               <h2 className="process-title">Simple Process</h2>
//               <p className="process-description">
//                 {/* Working with a financial advisor is a simple three step process */}
//               </p>
//             </div>
//           </div>

//           <div className="row">
//             <ProcessCard
//               title="Initial Consultation"
//               body="In the initial consultation, your advisor will get to know your financial journey and goals."
//               cardNumber={1}
//             />
//             <ProcessCard
//               title="Initial Consultation"
//               body="In the initial consultation, your advisor will get to know your financial journey and goals."
//               cardNumber={1}
//             />
//             <ProcessCard
//               title="Initial Consultation"
//               body="In the initial consultation, your advisor will get to know your financial journey and goals."
//               cardNumber={1}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

const Process = (): React.ReactElement => {
  return (
    <>
      <section className="section bg-light process" id="process">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="process-title">Simple Process</h2>
              <p className="process-description">
                {/* Working with a financial advisor is a simple three step process */}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <ul className="item-list-right item-list-big list-unstyled">
                <li>
                  <span className="number">1</span>
                  <h4>Unlimated Lifetime</h4>
                  <p className="text-muted">
                    Your project looks great on any device. Content can be
                    easily read and a user understands freely what you wanted to
                    say him or her.
                  </p>
                </li>
                <li>
                  <span className="number">2</span>
                  <h4>Our Mission</h4>
                  <p className="text-muted">
                    Your project looks great on any device. Content can be
                    easily read and a user understands freely what you wanted to
                    say him or her.
                  </p>
                </li>
                <li>
                  <span className="number">3</span>
                  <h4>Find Your Docs</h4>
                  <p className="text-muted">
                    Your project looks great on any device. Content can be
                    easily read and a user understands freely what you wanted to
                    say him or her.
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 order-lg-4">
              <ul className="item-list-left item-list-big list-unstyled">
                <li>
                  <span className="number">4</span>
                  <h4>Calculate Your Coins</h4>
                  <p className="text-muted">
                    Your project looks great on any device. Content can be
                    easily read and a user understands freely what you wanted to
                    say him or her.
                  </p>
                </li>
                <li>
                  <span className="number">5</span>
                  <h4>Great App Musics</h4>
                  <p className="text-muted">
                    Your project looks great on any device. Content can be
                    easily read and a user understands freely what you wanted to
                    say him or her.
                  </p>
                </li>
                <li>
                  <span className="number">6</span>
                  <h4>Take Your Coffe</h4>
                  <p className="text-muted">
                    Your project looks great on any device. Content can be
                    easily read and a user understands freely what you wanted to
                    say him or her.
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="text-center d-none d-sm-block">
                <Image src="home-rocket-graphic.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
