import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Examples from "../components/examplesComponent";

function ExamplePage() {
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
        <Header />
        <Examples />
        <Footer />
      </main>
    </>
  );
}

export default ExamplePage;
