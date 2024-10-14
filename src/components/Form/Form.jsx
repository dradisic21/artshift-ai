import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../ui/Input";
import { Textarea } from "../../ui/Textarea";
import { Button } from "../../ui/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import "../../styles/Form.scss";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && message ) {
      toast.success("Message sent successfully!", {
        position: "top-right",
      });
      console.log("Forma je poslata sa reCAPTCHA odgovorom:", recaptchaValue);
    } else {
      toast.error("Please fill in all fields.", {
        position: "top-right",
      });
    }
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="form-group">
        <div className="input-data">
          <Input
            className="contact-input"
            type="text"
            placeholder="Name*"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-data">
          <Input
            className="contact-input"
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-data textarea">
          <Textarea
            className="contact-textarea"
            rows="6"
            cols="50"
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <p className="apply-form">
          This site is protected by reCAPTCHA and the Google{" "}
          <Link to="https://policies.google.com/privacy">Privacy Policy</Link>{" "}
          and{" "}
          <Link to="https://policies.google.com/terms">Terms of Service</Link>{" "}
          apply.
        </p>

        <div className="btn-position">
          <Button className="submit-form_button" type="submit" name="Send" />
        </div>
        <div className="rechapta">
          <ReCAPTCHA
            sitekey="6LeNh2cpAAAAADVtIIrdX2u8UjrvxKT-DgOPqEV9"
            onChange={handleRecaptchaChange}
            size="invisible"
          />
        </div>
      </form>
    </>
  );
}
