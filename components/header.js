/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import { Button, Navbar } from "flowbite-react";

function App() {
  const one = (
    <>
      <nav className='font-sans bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-transparent '>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <a href='#' className='flex items-center'>
            <img
              src='https://github.com/webtrope.png'
              className='h-6 mr-3 sm:h-9'
              alt='WebTrope Logo'
            />
            <h1 className='self-center text-xl font-semibold text-gray-900 leading-none tracking-light dark:text-white'>
              WebTrope
            </h1>
          </a>
          <div className='flex md:order-2'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Get started
            </button>

            <button
              data-collapse-toggle='navbar-default'
              type='button'
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-default'
              aria-expanded='true'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-cta'
          >
            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-gray-700'>
              <li>
                <a
                  href='/'
                  className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='about'
                  className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

  return (
    <Navbar
      fluid={true}
      className='
    dark:bg-nav
    '
    >
      <Navbar.Brand href='/'>
        <img
          src='https://github.com/webtrope.png'
          className='mr-3 h-6 sm:h-9'
          alt='webtrope logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          WebTrope
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='/'>Home</Navbar.Link>
        <Navbar.Link href='/about'>About</Navbar.Link>
        <Navbar.Link href='/contact'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
