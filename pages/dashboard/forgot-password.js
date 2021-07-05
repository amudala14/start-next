import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function componentName() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='login'>
        <div className='login-details'></div>
        <div className='login-form--area'>
          <div className='login-form--area-group'>
            <h1 className='fs--40 font-weight-bold text-center'>
              Forgot Password
            </h1>
            <p className='pt--15 text-center'>
              Enter your account email to <br /> recover your account.
            </p>
            <form className='pt--20 pb--20'>
              <div className='form-group position-relative'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Ex: someone@gmail.com'
                  className='form-control'
                  autoComplete='off'
                />
              </div>

              <div className='form-group position-relative pt--20'>
                <Link href='/dashboard' passHref>
                  <button className='btn btn-primary w-100p'>Recover</button>
                </Link>
              </div>
            </form>

            <span className='fs--16 d-block text-center'>
              Don’t have an account yet?
              <Link href='/dashboard/create-account' passHref={true}>
                <span className='font-weight-bold pointer text-primary-green'>
                  {' '}
                  SIGN UP
                </span>
              </Link>
            </span>

            <Link href='/' passHref={true}>
              <p className='terms pointer'>
                Terms & condition | Privacy Policy{' '}
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
