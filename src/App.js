import React, { useState } from 'react';
import './style.css';

import FormInput from './components/FormInput';

export default function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:"Username should be 3-16 characters and shouldn include any speial character",
      label: 'Username',
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage:"ıt should be a valid email",
      label: 'Email',
      required:true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:"Password should be 8-20 characters and include at least 1etter ,1 num and 1 spe cha",
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$`,
      required:true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage:"Password dont match",
      label: 'Confirm Password',
      pattern:values.password,
      required:true,
    },
  ];
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values)
  return (
    <div className="app">
      <form action="" onSubmit={handleSubmit} id="form">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]}  onChange={onChange} />
        ))}

        <button type="submit">SUBMİT</button>
      </form>
    </div>
  );
}
