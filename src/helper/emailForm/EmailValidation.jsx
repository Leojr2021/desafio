import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./EmailValidation.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("mqkozznp");
  if (state.succeeded) {
      return <p>Gracias por suscribirte!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email">
        Email Address
      </label> */}
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ingresa tu email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting}>
        <BsFillArrowRightSquareFill size="2em" />
      </button>
    </form>
  );
}

export default ContactForm