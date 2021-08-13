import React from 'react';

interface RenderProps {
  login: () => void;
  register: () => void;
}

interface AuthProps {
  children: (obj: RenderProps) => void;
}


const Auth = ({ children: render }: AuthProps) => {
  const login = () => {};
  const register = () => {};

  return render({ login, register })
};

export default Auth;
