/* eslint-disable @next/next/no-img-element */
function SecondCTA() {
  return (
    <section
      className='bg-white dark:bg-gray-800/50 backdrop-blur-sm text-justify'
      id='cta1'
    >
      <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
        <div className='mt-4 md:mt-0'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            {"Get it done at a low cost"}
          </h2>
          <p className='mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400'>
            {
              "At WebTrope, we understand that not everyone has the same budget for a new website. That's why we offer extremely affordable prices for our web design services. Whether you're a small business owner, a blogger, or an individual looking to showcase your work online, our team will work with you to create a stunning website at a price that fits your budget."
            }
          </p>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Get in touch
          </button>
        </div>
        <img
          className='w-full dark:hidden'
          src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
          alt='dashboard image'
        />
        <img
          className='w-full hidden dark:block'
          src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'
          alt='dashboard image'
        />
      </div>
    </section>
  );
}

export default SecondCTA;
