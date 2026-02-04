import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { CaseStudies } from './sections/CaseStudies';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Certifications } from './sections/Certifications';
import { CTABanner } from './sections/CTABanner';
import { Footer } from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';

// Case Study Pages
import RemotebaseCaseStudy from './pages/case-studies/Remotebase';
import ClearHouseCaseStudy from './pages/case-studies/ClearHouse';
import CanzMarketingCaseStudy from './pages/case-studies/CanzMarketing';
import SwipeWiresCaseStudy from './pages/case-studies/SwipeWires';

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Skills />
        <Experience />
        <Certifications />
        <CTABanner />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/remotebase" element={<RemotebaseCaseStudy />} />
        <Route path="/case-studies/clear-house" element={<ClearHouseCaseStudy />} />
        <Route path="/case-studies/canz-marketing" element={<CanzMarketingCaseStudy />} />
        <Route path="/case-studies/swipe-wires" element={<SwipeWiresCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
