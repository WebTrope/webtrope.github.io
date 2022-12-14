/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import FirstCTA from "../components/cta1";
import SecondCTA from "../components/cta2";
import ThirdCTA from "../components/cta3";
import Footer from "../components/footer";
import Header from "../components/header";

function App() {
  return (
    <>
      <Head>
        <title>WebTrope</title>
        <meta
          name='description'
          content='Have a mind-blowing attractive and personalised website built in a short time. For you.'
        />
        <link rel='icon' href='https://github.com/webtrope.png' />
      </Head>
      <main className='min-h-screen dark:bg-main flex justify-between flex-col'>
        <section className='bg-white dark:bg-main'>
          <Header />
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
            <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
              We transform your vision online.
            </h1>
            <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
              Here at WebTrope, we are passionate about creating custom web
              solutions that help our clients stand out online.
            </p>
            <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
              <button
                href='#'
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
        <FirstCTA />
        <SecondCTA />
        <ThirdCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
