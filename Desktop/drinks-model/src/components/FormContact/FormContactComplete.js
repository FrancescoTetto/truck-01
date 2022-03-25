import React, { useState } from "react";
import "./FormContact.css";

const FormContactComplete = () => {
  const [textrequest, setTextRequest] = useState("");

  return (
    <div className='form-content-right-x'>
      <form className='form-x' noValidate>
        <div className='form-inputs-q'>
          <label className='form-label-q'></label>
          <input
            className='form-input-q'
            type='text'
            name='firstname'
            placeholder='First Name'
            // value={firstname}
          />
        </div>
        <div className='form-inputs-q'>
          <label className='form-label-q'></label>
          <input
            className='form-input-q'
            type='text'
            name='surname'
            placeholder='Surname'
            // value={firstname}
          />
        </div>
        <div className='form-inputs-q'>
          <label className='form-label-q'></label>
          <input
            className='form-input-q'
            type='number'
            name='Phone Number'
            placeholder='Phone Number'
            // value={firstname}
          />
        </div>
        <div className='form-inputs-q'>
          <label className='form-label-q'></label>
          <input
            className='form-input-q'
            type='email'
            name='Email'
            placeholder='Email'
            // value={firstname}
          />
        </div>

        <button className='form-input-btn-x' type='submit'>
          Send
        </button>
        <span className='form-input-login'></span>
      </form>
    </div>
  );
};

export default FormContactComplete;
