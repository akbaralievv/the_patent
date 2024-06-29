import { useEffect } from 'react';
import PropTypes from 'prop-types';

import About from '../../../layouts/sections/about/About';
import Home from '../../../layouts/sections/home/Home';
import News from '../../../layouts/sections/news/News';
import Services from '../../../layouts/sections/services/Services';

function Sections({ homeRef, aboutRef, servicesRef, newsRef }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <News newsRef={newsRef} />
    </>
  );
}

export default Sections;

Sections.propTypes = {
  homeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  servicesRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  newsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
