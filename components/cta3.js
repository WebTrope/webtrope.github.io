function ThirdCTA() {
  return (
    <section className='bg-white dark:bg-gray-700/50 backdrop-blur-sm'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'>
            Start your free trial today
          </h2>
          <p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
            {
              "We're offering a free month of service to all new customers. This way, you can try us out and see for yourself the high-quality work our team is capable of. "
            }
          </p>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            Start your free month
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThirdCTA;
