/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <footer className='p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800/50 backdrop-blur-sm font-sans '>
      <div className='mx-auto max-w-screen-xl text-center'>
        <a
          href='#'
          className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <img
            src='https://github.com/webtrope.png'
            alt='Webtrope'
            className='w-8 h-8 mr-2'
          />
          WebTrope
        </a>
        <p className='my-6 text-gray-500 dark:text-gray-400'>
          A web development agency that specializes in creating dynamic and
          static websites at an affordable price.
        </p>

        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022{" "}
          <a href='#' className='hover:underline'>
            WebTrope
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
