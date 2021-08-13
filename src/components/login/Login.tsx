import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { login, selectAuth } from '../../slices/authSlice';


const initialFormValue = {
  identity: '', 
  password: '' 
}

const Login = () => {
  const [formValue, setFormValue] = useState(initialFormValue)

  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  console.log(auth)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      login(formValue)
    );
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
        <TextField 
          name="identity" 
          label="Email" 
          variant="outlined" 
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField 
          name="password" 
          label="Password" 
          variant="outlined" 
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit"
          disabled={auth.status === 'loading' || isFormIncomplete}
        >
          login
        </Button>
      </form> 
    </div>
  )
}

export default Login;
