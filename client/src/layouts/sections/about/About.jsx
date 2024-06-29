import PropTypes from 'prop-types';

import ConsultationForm from '../consultationForm/ConsultationForm';
import OurTeam from '../ourTeam/OurTeam';
import Priority from '../priority/Priority';

function About({ aboutRef }) {
  return (
    <section className="py-8 pb-8 mx-auto w-full">
      <Priority aboutRef={aboutRef} />
      <ConsultationForm />
      <OurTeam />
    </section>
  );
}
export default About;

About.propTypes = {
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
