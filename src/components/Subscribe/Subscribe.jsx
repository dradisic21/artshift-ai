import React, { useState } from "react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/Subscribe.scss";

export function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSuccess = () => {
    toast.success("Subscription successful!", {
      position: "top-right",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      handleSuccess();
      setEmail("");
    } else {
      toast.error("Please enter your email.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="subscribe-main">
      
      <h3 className="title">Subscribe</h3>
      <p className="subtitle">
        Sign up to be the first to know about our soft launch events.
      </p>
      <div>
        <form onSubmit={handleSubmit} className="input-container">
          <Input
            className="subscribe-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="sub-button" type="submit" name="Subscribe" />
        </form>
        
      </div>
      <ToastContainer />
    </div>
  );
}
