import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";

import "./components/components.css";
import "./pages/pages.css";
import "./App.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AccessNotes = lazy(() => import("./pages/AccessNotes"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Subjects = lazy(() => import("./pages/Subjects"));
const Files = lazy(() => import("./pages/Files"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route
            path="/dashboard"
            element={
              <PageWrapper>
                <Suspense fallback={<div className="loading-skeleton" />}>
                  <Dashboard />
                </Suspense>
              </PageWrapper>
            }
          />

          <Route
            path="/access-notes"
            element={
              <PageWrapper>
                <Suspense fallback={<div className="loading-skeleton" />}>
                  <AccessNotes />
                </Suspense>
              </PageWrapper>
            }
          />

          <Route
            path="/subjects/:university/:semester"
            element={
              <PageWrapper>
                <Suspense fallback={<div className="loading-skeleton" />}>
                  <Subjects />
                </Suspense>
              </PageWrapper>
            }
          />

          <Route
            path="/notes/:university/:semester/:subject"
            element={
              <PageWrapper>
                <Suspense fallback={<div className="loading-skeleton" />}>
                  <Files />
                </Suspense>
              </PageWrapper>
            }
          />

          <Route
            path="/disclaimer"
            element={
              <PageWrapper>
                <Suspense fallback={<div className="loading-skeleton" />}>
                  <Disclaimer />
                </Suspense>
              </PageWrapper>
            }
          />

          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Suspense fallback={<div className="loading-skeleton" />}>
                  <ContactUs />
                </Suspense>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://notes-hub-backend-3vxj.onrender.com/health").catch(() => {});
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}