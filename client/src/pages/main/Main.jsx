import { Route, Routes, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import NewsDetail from '../newsDetail/NewsDetail';
import Sections from './sections';
import ServicesDetail from '../servicesDetail/ServicesDetail';

function Main() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const newsRef = useRef(null);
  const contactsRef = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (section) => {
    const sectionMap = {
      Главное: homeRef,
      'Об агентстве': aboutRef,
      Услуги: servicesRef,
      Новости: newsRef,
      Контакты: contactsRef,
    };

    const ref = sectionMap[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      if (section !== 'Главное') {
        navigate('/');
      }
    }
  };

  return (
    <main className="min-h-screen bg-black-90">
      <Header scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/newsDetail/:id" element={<NewsDetail />} />
        <Route path="/servicesDetail/:id" element={<ServicesDetail />} />
        <Route
          path="/"
          element={
            <Sections
              homeRef={homeRef}
              aboutRef={aboutRef}
              servicesRef={servicesRef}
              newsRef={newsRef}
            />
          }
        />
      </Routes>
      <Footer contactsRef={contactsRef} />
    </main>
  );
}

export default Main;
