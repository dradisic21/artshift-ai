import { Nav } from "../../layouts/Nav/Nav";
import { Form } from "../../components/Form/Form";
import { Footer } from "../../layouts/Footer/Footer";
import "../../styles/ContactPage.scss";

export function ContactPage() {
  return (
    <div className="contact-page_container">
      <Nav />

      <div className="form-content">
        <h1>Contact Us</h1>
        <Form />
      </div>

      <Footer />
    </div>
  );
}
