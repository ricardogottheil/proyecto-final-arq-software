import { useState } from 'react';
import { useAuth } from '../context/authContext';

export const RegisterView = () => {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='youremail@company.com'
        onChange={handleChange}
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        placeholder='password'
        onChange={handleChange}
      />

      <button>Register</button>
    </form>
  );
};
