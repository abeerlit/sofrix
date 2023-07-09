'use client';

import { Box } from '@chakra-ui/react';
import Features from '~/lib/components/Features/Features';
import Feedback from '~/lib/components/Feedback/Feedback';
import Hero from '~/lib/components/Hero/Hero';
import HireEmployees from '~/lib/components/HireEmployees/HireEmployees';
import LetsTalk from '~/lib/components/LetsTalk/LetsTalk';
import LogosStripe from '~/lib/components/LogosStripe/LogosStripe';
import OurProjects from '~/lib/components/OurProjects/OurProjects';
import Services from '~/lib/components/Services/Services';
import Stats from '~/lib/components/Stats/Stats';

const Home = () => {

  return (
    <Box
      maxW={'100vw'}
      overflow={'hidden'}
    >
      <Hero />
      <LogosStripe />
      <HireEmployees />
      <Stats />
      <Services />
      <OurProjects />
      <Features />
      <Feedback />
      <LetsTalk />
    </Box>
  );
};

export default Home;
