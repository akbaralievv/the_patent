import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import HeadContacts from '../../components/headContacts/HeadContacts';
import NavBar from '../../components/navbar/NavBar';

function Header({ scrollToSection }) {
  const headerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const [showHeadContacts, setShowHeadContacts] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        if (headerRef.current) {
          headerRef.current.classList.remove('translate-y-0');
          headerRef.current.classList.add('-translate-y-full');
        }
        setShowHeadContacts(false);
      } else {
        if (headerRef.current) {
          headerRef.current.classList.remove('-translate-y-full');
          headerRef.current.classList.add('translate-y-0');
        }
        if (currentScroll === 0) {
          setShowHeadContacts(true);
        } else {
          setShowHeadContacts(false);
        }
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="fixed z-20 top-0 left-0 w-full transform transition-transform duration-300 translate-y-0">
      {showHeadContacts && <HeadContacts />}
      <NavBar scrollToSection={scrollToSection} />
    </header>
  );
}

export default Header;
Header.propTypes = {
  scrollToSection: PropTypes.func,
};
