import { Header } from "../../layouts/Header/Header";
import { Footer } from "../../layouts/Footer/Footer";
import { Features } from "../../sections/Features/Features";
import { Advantages } from "../../sections/Advantages/Advantages";
import { Benefits } from "../../sections/Benefits/Benefits";
import { Faq } from "../../sections/Faq/Faq";
import { GetApp } from "../../sections/GetApp/GetApp";
import "../../styles/HomePage.scss";

export function HomePage() {
  return (
    <div className="home-container">
      <Header />
      <Features />
      <Advantages />
      <Benefits />
      <Faq />
      <GetApp />
      <Footer />
    </div>
  );
}
