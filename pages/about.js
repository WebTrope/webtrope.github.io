/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import gsap from "gsap";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
    gsap
      .fromTo(
        ".p1",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .delay(0.5);
    gsap
      .fromTo(
        ".p2",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .delay(1);
    gsap
      .fromTo(
        ".p3",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .delay(1.2);
    gsap
      .fromTo(
        ".p4",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .delay(1.4);
    gsap
      .fromTo(
        ".p5",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
      .delay(1.6);
  });

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name='description'
          content='Have a mind-blowing attractive and personalised website built in a short time. For you.'
        />
        <link rel='icon' href='https://github.com/webtrope.png' />
      </Head>
      <main className='dark min-h-screen dark:bg-main flex justify-between flex-col'>
        <Header />
        <section className='dark bg-white dark:bg-transparent '>
          <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 grid place-content-center'>
            <div className='max-w-screen-lg m-0 text-gray-500 text-justify sm:text-lg dark:text-gray-400'>
              <h2 className='heading mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white text-center'>
                WebTrope
              </h2>
              <div className='mb-4 font-light p1'>
                Welcome to WebTrope, a web development agency that specializes
                in creating dynamic and static websites at an affordable price.
              </div>
              <div className='mb-4 font-light p2'>
                Our team is made up of experienced web designers and developers
                who are dedicated to delivering high-quality work for our
                clients. We understand that not everyone has the same budget for
                a new website, which is why we strive to offer the most
                competitive prices in the industry.
              </div>
              <div className='mb-4 font-light p3'>
                At WebTrope, we believe that every business, regardless of its
                size, should have a professional online presence. That's why we
                work closely with our clients to create custom websites that
                perfectly capture their unique vision and brand. Whether you're
                a small business owner, a blogger, or an individual looking to
                showcase your work online, our team has the skills and expertise
                to bring your vision to life.
              </div>
              <div className='mb-4 font-light p4'>
                In addition to our web design and development services, we also
                offer ongoing support and maintenance to ensure that your
                website stays up-to-date and runs smoothly.
              </div>
              <div className='mb-4 font-light p5'>
                If you're looking for a dynamic and affordable web design
                agency, look no further than WebTrope. Contact us today to get
                started on your new website. We can't wait to help you take the
                first step towards boosting your online presence.
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default About;
