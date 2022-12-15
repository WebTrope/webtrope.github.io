/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    // gsap scroll trigger
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    // gsap animation
    gsap.fromTo(
      ".servicesheading",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".servicesheading",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".devcard",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".devcard",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".hostcard",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hostcard",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".dyncard",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".dyncard",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        id='services'
        className='min-h-screen bg-slate-100 dark:bg-slate-800/10 p-12 flex flex-col '
      >
        <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl  sm:py-16 lg:px-6'>
          <h1 className='servicesheading mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-indigo-200 '>
            Services
          </h1>
        </div>
        <div className='flex flex-col justify-center grow'>
          <div className='grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-2'>
            <Card
              title='Development'
              description='
              We write clean, efficient and maintainable code very carefully to make your website fast and responsive. This is done for a one time fee.'
              icon='/webdev.svg'
              className='devcard'
            />
            <Card
              title={
                <>
                  Hosting /{" "}
                  <span className='text-xs font-mono'>1 Month Free Trial</span>
                </>
              }
              description='
                We provide hosting services for your website. We also provide domain name registration. This is done as a subscription service.'
              icon='/hosting.svg'
              className='hostcard'
            />
          </div>
        </div>
        <div className='mainicon flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
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
      </section>
    </>
  );
}

function Card(props) {
  const { title, description, icon, className } = props;
  return (
    <div
      className={
        "h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-main dark:border-gray-700 flex flex-col justify-around" +
        " " +
        className
      }
    >
      <a href='#'>
        <img
          className='rounded-t-lg px-24 py-12 fill-indigo-900'
          src={icon}
          alt=''
        />
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <p className='text-justify mb-3 font-normal text-lg text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Services;
