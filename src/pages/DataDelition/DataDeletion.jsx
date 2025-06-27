import { useState, useEffect } from "react";
import { Nav } from "../../layouts/Nav/Nav";
import { Footer } from "../../layouts/Footer/Footer";
import { Button } from "../../ui/Button";
import { PopUpForm } from "../../components/PopUpForm/PopUpForm";
import "../../styles/DataDeletion.scss";

export function DataDeletion() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openForm = () => {
    setPopupVisible(true);
    document.body.classList.add("no-scroll");
  };

  const closeForm = () => {
    setPopupVisible(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="data-container">
      <Nav />

      <div className="reguest-data">
        <h1 className="data-title">Data Deletion</h1>
        <div className="content-box">
          <h2>Request Data Deletion</h2>
          <p>
            If you wish to delete all data associated to you from ArtShift app,
            you can do so here. Contact us and we'll process your request as
            soon as possible
          </p>
          <Button
            className="data-button"
            name="DATA DELETION REQUEST"
            onClick={openForm}
          />
        </div>
        {isPopupVisible && <PopUpForm onClose={closeForm} />}
      </div>

      <Footer />
    </div>
  );
}
