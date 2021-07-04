/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';

import Wrapper from '../compontents/Layouts/Wrapper';
import Contents from '../compontents/Layouts/Contents';
import { homePage } from '../data/client';
import PostsGrip from '../compontents/PostsGrip';

export default function componentName() {
  return (
    <>
      <Wrapper isNavTransparent={true}>
        <section className='main-header w-100p p--0'>
          <h1 className='main-header-text'>
            Everything you <br />
            need to know about <br />
            <span className='font-weight-bold'>Rwandan coffee</span>
          </h1>
        </section>
        <Contents>
          {/* History */}
          <div className='row'>
            <div className='col-12 col-md-6 pb--20 '>
              <img src={homePage.history.imgPath} alt="" className='w-100p' />
            </div>
            <div className='col-12 col-md-6'>
              <h3 className='pb--30 text-gold'>History</h3>
              {homePage.history.text}
            </div>
          </div>

          {/* Current state of the Rwandan coffee */}
        </Contents>

        <Contents pt='0'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='pb--50 fw--500 text-gold text-center'>
                Current state of the Rwandan coffee
              </h3>
            </div>
            <div className='col-12 col-md-5 pb--20'>
              <img
                src={homePage.currentState.img1Path}
                className='w-100p'
                alt=''
              />
            </div>
            <div className='col-12 col-md-7 pb--20'>
              <img
                src={homePage.currentState.img2Path}
                className='w-100p'
                alt=''
              />
            </div>
          </div>
        </Contents>

        <Contents pt='0'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='pb--40 fw--500 text-gold text-center'>
                The Rwandan coffee value chain
              </h3>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <p>{homePage.rCoffeeValue.text}</p>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <img
                src={homePage.rCoffeeValue.imgPath}
                className='w-100p'
                alt=''
              />
            </div>
          </div>
        </Contents>

        <Contents pt='0'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='pb--40 fw--500 text-gold text-center'>
                Rwandan coffee growing calendar
              </h3>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <p>{homePage.rGrowingCalendar.text}</p>
            </div>
            <div className='col-12 col-md-12 pb--20'>
              <img
                src={homePage.rGrowingCalendar.imgPath}
                className='w-100p'
                alt=''
              />
            </div>
          </div>
        </Contents>

        <Contents pt='20'>
          <h3 className='pb--60 fw--500 text-gold text-center'>
            Rwandan coffee in the news
          </h3>
          <PostsGrip posts={homePage.news} />
        </Contents>
      </Wrapper>
    </>
  );
}
