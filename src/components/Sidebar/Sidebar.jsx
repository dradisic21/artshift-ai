import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { menuSlide } from "../../ui/Anime/anime";
import { Curve } from "../../ui/Curve/Curve";
import "../../styles/Sidebar.scss";

export function Sidebar() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="body">
        <div className="nav">
          <div className="nav-header">
           <img src="/assets/logo/artshift-transparent-min-bg.png" alt="artshift-logo" />
          </div>
          <ul>
            <li>
              <Link to="/terms-conditions">Terms & Condition</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/data-deletion">Data Deletion</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
