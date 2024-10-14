import { Header } from "../../layouts/Header/Header";
import { Footer } from "../../layouts/Footer/Footer";
import { Fetatures } from "../../sections/Features/Features";
import { Advantages } from "../../sections/Advantages/Advantages";
import { Benefits } from "../../sections/Benefits/Benefits";
import { Faq } from "../../sections/Faq/Faq";
import { GetApp } from "../../sections/GetApp/GetApp";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import "../../styles/HomePage.scss"

export function HomePage() {
  return (
  
      <div className="home-container">
        <Header />
        <Fetatures />
        <Advantages />
        <Benefits />
        <Faq />
        <GetApp />
     
     
      <Footer />
    </div>
  );
}
