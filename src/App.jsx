import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { PrivacyPolice } from "./pages/PrivacyPolice/PrivacyPolice";
import { Cookies } from "./layouts/Cookie/Cookies";
import { BackToTopButton } from "./components/BackToTopButton/BackToTopButton";
import { TermsAndCondition } from "./pages/TermsAndCondition/TermsAndCondition";
import { DataDeletion } from "./pages/DataDelition/DataDeletion";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export function App() {
  return (
    <Router>
      <div className="App">
        <Cookies />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolice />} />
          <Route path="/terms-conditions" element={<TermsAndCondition />} />
        </Routes>
      </div>
    </Router>
  );
}
