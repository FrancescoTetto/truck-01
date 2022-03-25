import React from "react";
import "./FormContact.css";

const FormSuccessContact = () => {
  return (
    <div className='form-content-right-t'>
      <h1 className='form-success-t'>SUCCESS!</h1>
      <img className='form-img-2-t' />
      <span
        className='close-btn-t'
        onClick={() => window.location.reload(false)}
      >
        ×
      </span>
    </div>
  );
};

export default FormSuccessContact;
