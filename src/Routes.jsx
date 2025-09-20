import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

const Services = lazy(() => import('./pages/services'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const ClientPortal = lazy(() => import('./pages/client-portal'));
const ContactPage = lazy(() => import('./pages/contact'));
const BeautyAcademy = lazy(() => import('./pages/beauty-academy'));
const About = lazy(() => import('./pages/about'));
const BookingPage = lazy(() => import('./pages/booking'));
const Homepage = lazy(() => import('./pages/homepage'));

const Routes = () => {
  return (
    <BrowserRouter>
  <ErrorBoundary>
  <ScrollToTop />
  <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
  <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/beauty-academy" element={<BeautyAcademy />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
