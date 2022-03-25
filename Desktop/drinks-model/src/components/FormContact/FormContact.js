import React, { useState, useEffect } from "react";
import "./FormContact.css";
import FormContactComplete from "./FormContactComplete";
import FormSuccessContact from "./FormSuccessContact";

const FormContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container-x'>
        <FormContactComplete submitForm={submitForm} />
      </div>
    </>
  );
};

export default FormContact;
