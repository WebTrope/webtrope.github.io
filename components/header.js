import { Button, Navbar } from "flowbite-react";
import { useEffect } from "react";
import gsap from "gsap";

/* eslint-disable @next/next/no-img-element */
function Header() {
  useEffect(() => {
    gsap.fromTo(
      ".nav-icons",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    gsap
      .fromTo(
        ".nav-four",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.5);
    gsap
      .fromTo(
        ".nav-three",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.7);
    gsap
      .fromTo(
        ".nav-two",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.7);
    gsap
      .fromTo(
        ".nav-one",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.5);
    gsap.fromTo(
      ".nav-brand",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  });

  return (
    <>
      <Navbar fluid={false} className='bg-nav'>
        <Navbar.Brand href='/' className='nav-brand'>
          <img
            src='https://github.com/webtrope.png'
            className='mr-3 h-6 sm:h-9'
            alt='webtrope logo'
          />
          <span className='text-xl font-heading self-center whitespace-nowrap dark:text-white'>
            WebTrope
          </span>
        </Navbar.Brand>
        <div className='flex md:order-2 nav-icons'>
          <div className='flex-row flex gap-2'>
            <Button
              onClick={() => {
                window.location.href = "contact";
              }}
            >
              Get started
            </Button>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href='/' className='nav-one group'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link className='nav-two group' href='/about'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              About
            </span>
          </Navbar.Link>
          <Navbar.Link className='nav-three group' href='/contact'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Contact
            </span>
          </Navbar.Link>
          <Navbar.Link className='nav-four group' href='/examples'>
            <span class='bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
              Examples
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
