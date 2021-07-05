import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CreateAccount() {
  return (
    <>
      <Head>
        <title>Create Account</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='login'>
        <div className='login-form--area'>
          <div className='login-form--area-group'>
            <h1 className='fs--40 font-weight-bold text-center mobile-top-20px'>
              Sign up
            </h1>
            <p className='pt--10 text-center'>
              Welcome to the new, simple way to know about{' '}
              <span className='font-weight-bold'>Rwandan coffee</span>
            </p>
            <form className='pt--0'>
              <div className='form-group mb--5 position-relative  pb-mobile-1'>
                <label className='mb--0' htmlFor='email'>
                  Name
                </label>
                <input
                  type='text'
                  name='_name'
                  placeholder='Your name'
                  className='form-control form-control-md'
                  autoComplete='off'
                />
              </div>
              <div className='form-group mb--5 position-relative  pb-mobile-1'>
                <label className='mb--0' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Ex: someone@gmail.com'
                  className='form-control form-control-md pb-mobile-1'
                  autoComplete='off'
                />
              </div>
              <div className='form-group mb--5 position-relative pb-mobile-1'>
                <label className='mb--0' htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='Min. 8 characters'
                  className='form-control form-control-md'
                  autoComplete='off'
                />
              </div>
              <div className='form-group mb--5 pb-mobile-1'>
                <label className='mb--0' htmlFor='select_options'>
                  What is your role?
                </label>
                <select
                  id='select_options'
                  className='form-control form-control-md bs-select'>
                  <option value='1'>Farmer</option>
                </select>
              </div>
              <div className='form-group mt--15 pb-mobile-1'>
                <label className='form-checkbox form-checkbox-primary mb--0'>
                  <input type='checkbox' name='checkbox' checked />
                  <i></i>{' '}
                  <span className='fs--15'>
                    <span className='font-weight-bold'>I agree to the </span>
                    <Link href='/'>
                      <span className='font-weight-normal pointer'>
                        Terms & Conditions
                      </span>
                    </Link>
                  </span>
                </label>
              </div>
              <div className='form-group position-relative pt--0'>
                <button className='btn btn-primary w-100p'>
                  Create account
                </button>
              </div>
            </form>

            <span className='fs--16 d-block text-center mobile-top-20px'>
              Already have an account?
              <Link href='/dashboard'>
                <span className='font-weight-bold pointer text-primary-green'>
                  {' '}
                  SIGN IN
                </span>
              </Link>
            </span>

            <Link href='/'>
              <p className='terms pointer'>
                Terms & condition | Privacy Policy{' '}
              </p>
            </Link>
          </div>
        </div>
        <div className='register-details'></div>
      </main>
    </>
  );
}
