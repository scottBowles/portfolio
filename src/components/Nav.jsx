import React, { useState } from 'react';

const HamburgerIcon = (props) => (
  <svg
    {...props}
    className="stroke-current"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
  >
    <line
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      x1="12"
      y1="21"
      x2="52"
      y2="21"
    />
    <line
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      x1="12"
      y1="33"
      x2="52"
      y2="33"
    />
    <line
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      x1="12"
      y1="45"
      x2="52"
      y2="45"
    />
  </svg>
);

const XIcon = (props) => (
  <svg
    {...props}
    className="h-16 w-16 feather feather-x"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => setNavIsOpen(!navIsOpen);

  return (
    <header className="flex justify-between h-16">
      <div>SB</div>
      <nav>
        <div className="text-gray-400 md:hidden">
          {navIsOpen ? (
            <div
              className={`${
                navIsOpen ? 'flex' : 'hidden'
              } flex-col items-end bg-gray-700 absolute top-0 right-0`}
            >
              <XIcon onClick={toggleNav} />
              <ol
                className={`${
                  navIsOpen ? 'flex' : 'hidden'
                } flex-col items-center md:flex md:flex-row w-full text-xl pb-8`}
              >
                <li className="hover:bg-gray-600 px-32 py-4">
                  <a href="/#home">Home</a>
                </li>
                <li className="hover:bg-gray-600 px-32 py-4">
                  <a href="/#work">Work</a>
                </li>
                <li className="hover:bg-gray-600 px-32 py-4">
                  <a href="/#about">About</a>
                </li>
                <li className="hover:bg-gray-600 px-32 py-4">
                  <a href="/#contact">Contact</a>
                </li>
              </ol>
            </div>
          ) : (
            <HamburgerIcon onClick={toggleNav} />
          )}
        </div>
      </nav>
    </header>
  );
};

export { Nav };
