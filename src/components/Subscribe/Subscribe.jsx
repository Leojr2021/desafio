import React from "react";
import ContactForm from "../../helper/emailForm/EmailValidation";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe_container">
      <div className="title">
        <h3>NEWSLETTER</h3>
      </div>
      <div className="subtitle">
        <h1>SUSCRIBETE</h1>
        <p>Y enterate de todas la novedades</p>
      </div>
      <div className="email_validation">
      <ContactForm />
      </div>
    </div>
  );
};

export default Subscribe;
