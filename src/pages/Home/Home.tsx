import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import './Home.scss';
import Process from './Process/Process';

const Home = (): React.ReactElement => {
  return (
    <>
      <Banner />

      <Features />

      <Process />
    </>
  );
};

export default Home;
