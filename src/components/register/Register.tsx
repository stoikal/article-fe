import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RegisterCreds } from '../../services/auth.service';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { register, selectAuth } from '../../slices/authSlice';

const initialValue: RegisterCreds = {
  email: '',
  password: '',
  role: 'visitor',
}

const Register = () => {
  const [formValue, setFormValue] = useState(initialValue)

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      register(formValue)  
    );
  };

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.currentTarget;
    setFormValue((prevVal) => ({
      ...prevVal,
      [name]: value
    }));
  };

  const isFormIncomplete = (() => {
    const { email, password } = formValue;
    return !email || !password
  })();

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="email" label="Email" variant="outlined" onChange={handleInputChange}/>
      <br />
      <br />
      <TextField name="password" label="Password" variant="outlined" onChange={handleInputChange}/>
      <br />
      <br />
      <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          disabled={auth.status === 'loading' || isFormIncomplete}
        >
        Register
      </Button>
    </form>
  )
};

export default Register;
