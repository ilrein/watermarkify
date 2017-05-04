import React from 'react';

// Page Sections
import Hero from '../../ui/hero';
import HowItWorks from '../../ui/how-it-works';
import Pricing from '../../ui/pricing';
import Signup from '../../ui/signup';
import MadeBy from '../../ui/made-by';

const Home = () =>
  <main>
    <Hero />
    <section>
      <HowItWorks />
    </section>
    <section>
      <Pricing />
    </section>
    <section>
      <Signup />
    </section>
    <section>
      <MadeBy />
    </section>
  </main>;

export default Home;
