import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicirs from '../components/OurPolicirs';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicirs/>
      <NewsletterBox/>
      
    </div>
  );
}

export default Home;
