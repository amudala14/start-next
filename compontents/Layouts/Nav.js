import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Nav({ isNavTransparent }) {
  const router = useRouter();
  const links = [
    { path: '/', name: 'Home' },
    { path: '/institutions', name: 'Institutions' },
    { path: '/events', name: 'Events' },
    { path: '/processing', name: 'Processing' },
    { path: '/news', name: 'News' },
    { path: '/buy', name: 'Buy' },
    { path: '/coffeeshops', name: 'Coffeshops' },
  ];

  const [isMenuShown, toggleMenu] = useState(false);

  return (
    <header className={`header ${isNavTransparent ? 'opacity-9' : ''}`}>
      <div className='container'>
        <div className='logo'>
          <Image
            src='/images/logo-top.svg'
            alt='user-photo'
            width={86.18}
            height={47.64}
            quality='100'
            onClick={() => router.push('/')}
            className='pointer'
          />
        </div>
        {!isMenuShown ? (
          <i
            onClick={() => toggleMenu(true)}
            className={`fi fs--30 text-white fi-bars-2 pointer hide-desk`}></i>
        ) : (
          <i
            onClick={() => toggleMenu(false)}
            className={`fi fs--30 text-white fi-close pointer hide-desk`}></i>
        )}
        <nav className={`top-nav ${isMenuShown ? 'left-0' : ''}`}>
          <ul>
            {links.map((link, i) => (
              <Link key={i} href={link.path}>
                {link.name}
              </Link>
            ))}
            <Link href='/dashboard' passHref>
              <button className='btn btn-primary btn-sm fs--15 h-35 mr--20 pl--20 pr--20'>
                Login
              </button>
            </Link>
          </ul>
          <div className='user-details'>
            <div className='img-holder'>
              <Image
                src='/images/user.png'
                alt='user-photo'
                width={40}
                height={40}
                quality='100'
                onClick={() => router.push('/dashboard/seller')}
                className='pointer'
              />
            </div>
            <i className='fi fi-arrow-down text-white ml--15'></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
