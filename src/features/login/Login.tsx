import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Login = () => {
  const [formValue, setFormValue] = useState({ identity: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)
    axios({
      method: 'post',
      url: 'https://tc-frontend.sebisedu.co.id/api/auth/login',
      data: formValue
    })
    .then((res) => {
      console.log(res.status)
    })
  }

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.currentTarget;
    setFormValue((prevVal) => ({
      ...prevVal,
      [name]: value
    }))
  }

  const isFormIncomplete = (() => {
    const { identity, password } = formValue;
    return !identity || !password
  })()

  return (
    <div>
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
          login
        </Button>
      </form> 
    </div>
  )
}

export default Login;
