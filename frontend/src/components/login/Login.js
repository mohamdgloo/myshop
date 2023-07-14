import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../ACTION/UserAction';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = new URLSearchParams(location.search).get('redirect') || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login(email, password));
    } 
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  return (
    <div className='border border-blue-300 w-4/6 mt-5 m-auto rounded'>
      <div className='flex flex-col justify-center'>
        <p className='text-center mt-3 text-4xl'>Sign In</p>
        <form className='mt-5 m-auto w-4/6' onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          {loading && <p>درحال بارگیری</p>}
          <div className='py-2 mt-2 flex flex-col'>
            <label>Email</label>
            <input
              type='email'
              placeholder='Your email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 mt-2 border border-blue-300 rounded'
            />
          </div>
          <div className='py-2 mt-2 flex flex-col'>
            <label>Password</label>
            <input
              type='password'
              placeholder='Your password...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-2 mt-2 border border-blue-300 rounded'
            />
          </div>
          <div className='mt-6 mb-6'>
            <button
              type='submit'
              className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600'
            >
              ورود
            </button>
          </div>
        </form>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p>
         اگه حساب نداری {' '}
          <Link to={redirect ? `/registration?redirect=${redirect}` : '/registration'}>
            ثبت نام کن
          </Link> .
        </p>
      </div> 
    </div>
  );
};

export default Login;
