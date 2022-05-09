import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import './Home.scss';
import Process from './Process/Process';

const Home = (): React.ReactElement => {
  return (
    <>
      <Banner />

      <Features />

      <Process />

      <Faq />
    </>
  );
};

export default Home;
