/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import WhatWeDo from "../components/whatWeDo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Services from "../components/services";
import Contact from "../components/contact";
import Examples from "../components/examples";
import { Button } from "flowbite-react";

function App() {
  const tawkWidget = useRef();

  const onLoad = () => {
    tawkWidget.current.hideWidget();
  };

  useEffect(() => {
    gsap.fromTo(
      ".mainheading",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
    gsap
      .fromTo(
        ".maintext",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        }
      )
      .delay(0.5);
    gsap
      .fromTo(
        ".mainicon",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        }
      )
      .delay(1);
  }, []);

  return (
    <>
      <Head>
        <title>WebTrope</title>
        <meta
          name='description'
          content='Have a mind-blowing attractive and personalised website built in a short time. For you.'
        />
        <meta
          name='keywords'
          content='webtrope, webtrope.com, webtrope.com.ng, Web development, Website design, Web design, Web development agency, Web design agency, Website development, Custom website development, Responsive web design, E-commerce website development, User experience (UX) design'
        />
        <link rel='icon' href='https://github.com/webtrope.png' />
      </Head>
      <main
        className='dark min-h-screen dark:bg-main
       flex justify-between flex-col'
      >
        <TawkMessengerReact
          propertyId='639b6c92daff0e1306dcdc30'
          widgetId='1gkbi07ll'
          onLoad={onLoad}
          ref={tawkWidget}
        />
        <section className='dark bg-white dark:bg-transparent'>
          <Button
            className='fixed bottom-5 right-5 z-50 shadow-lg'
            onClick={() => {
              window.Tawk_API.toggle();
            }}
          >
            <span>Chat</span>
          </Button>
          <Header />
          <div className='min-h-screen py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col justify-center align-center'>
            <div>
              <h1 className='gradient mainheading mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                We transform your vision online.
              </h1>
              <div className='maintext mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
                Here at WebTrope, we are passionate about creating custom web
                solutions that help our clients stand out online.
              </div>
            </div>
            <div className='mainicon flex flex-col mt-16 my-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
              <button
                onClick={() => {
                  // scroll one section downwards on click
                  window.scrollBy({
                    top: window.innerHeight,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className='animate-bounce inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 dark:focus:ring-primary-900'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <WhatWeDo />
        <Services />
        <Examples />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
