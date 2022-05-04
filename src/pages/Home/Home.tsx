import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import './Home.scss';

const Home = (): React.ReactElement => {
  return (
    <>
      <Banner />

      <Features />
    </>
  );
};

export default Home;
