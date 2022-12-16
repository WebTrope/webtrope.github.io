/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "flowbite-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

function Examples() {
  useEffect(() => {
    // gsap scroll trigger
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
    // gsap animation
    gsap.fromTo(
      ".examplesheading",
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
          trigger: ".examplesheading",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".card1",
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
          trigger: ".card1",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".card2",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".card2",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        id='examples'
        className='min-h-screen w-full bg-slate-100 dark:bg-slate-700/10 p-12 flex flex-col '
      >
        <div className='gap-8 items-center py-8 px-4 mx-auto sm:py-16 lg:px-6'>
          <h1 className='examplesheading mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-indigo-200 '>
            Examples
          </h1>
        </div>

        <div className='flex flex-col justify-center grow'>
          <div className='grid grid-cols-auto gap-12 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-2'>
            <Card
              title='Example Artist Website'
              description='This is an example of a website for an artist. Features server-side rendering, a contact form, and entry animations'
              link='https://lorem-artist.vercel.app/'
              image={
                <img
                  className='rounded-t-lg shadow-lg cursor-pointer'
                  src='/lorem-artist.png'
                  alt='artist website'
                  onClick={() =>
                    window.open("https://lorem-artist.vercel.app/")
                  }
                />
              }
              className='card1'
            />
            <Card
              title='WebTrope Landing Page'
              description='Our landing page for WebTrope, this is an example of a modern landing page. Features server-side rendering, a contact form, and scroll animations'
              link='https://webtrope.github.io/'
              image={
                <img
                  className='rounded-t-lg shadow-lg cursor-pointer'
                  src='/webtrope.png'
                  alt='main website'
                  onClick={() => window.open("https://webtrope.github.io/")}
                />
              }
              className='card2'
            />
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
      </section>
    </>
  );
}

function Card(props) {
  const { title, description, link, image, className } = props;
  return (
    <div
      className={
        "h-full w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-main dark:border-gray-700 flex flex-col justify-between" +
        " " +
        className
      }
    >
      <div className='rounded-t-lg flex justify-center align-center'>
        {image}
      </div>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <p className='text-justify mb-3 font-normal text-lg text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <Button
          onClick={() => {
            window.open(link);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
}

export default Examples;
