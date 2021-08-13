import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Register = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.currentTarget;
    setFormValue((prevVal) => ({
      ...prevVal,
      [name]: value
    }))
  }

  const isFormIncomplete = (() => {
    const { email, password } = formValue;
    return !email || !password
  })()

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="identity" label="Email" variant="outlined" onChange={handleInputChange}/>
      <br />
      <br />
      <TextField name="password" label="Password" variant="outlined" onChange={handleInputChange}/>
      <br />
      <br />
      <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          disabled={isSubmitting || isFormIncomplete}
        >
        Register
      </Button>
    </form>
  )
};

export default Register;
