import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Hamburger from "hamburger-react";


import "../../styles/Nav.scss";

export function Nav() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="nav-container">
      <nav>
        <div className="logo-container">
          <Link to="/">
          <img src="/assets/logo2.png" alt="storiya-logo" />
          </Link>
        </div>

        <div className="icon-toggle" >
          <Hamburger size={24} toggled={isOpen} toggle={setOpen}/>
          {isOpen && <Sidebar />}  
        </div> 
      </nav>
    </div>
  );
}
