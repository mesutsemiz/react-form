import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const HandleFocus = (e) => {
    setFocused(true);
  };

  const { label, onChange, id, errorMessage, ...inputProps } = props;
  console.log(props)
  return (
    <div className="formInput">
      <label>{label} </label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={HandleFocus}
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInput;
