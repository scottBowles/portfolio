import React, { useState } from 'react';

const HamburgerIcon = ({ className, ...props }) => (
  <svg
    {...props}
    className={`stroke-current ${className}`}
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

const XIcon = ({ className, ...props }) => (
  <svg
    {...props}
    className={`h-16 w-16 feather feather-x ${className}`}
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

const navItems = [
  {
    text: 'Home',
    href: '/#home',
  },
  {
    text: 'Work',
    href: '/#work',
  },
  {
    text: 'About',
    href: '/#about',
  },
  {
    text: 'Contact',
    href: '/#contact',
  },
];

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => setNavIsOpen(!navIsOpen);

  return (
    <header className="flex justify-between h-16">
      <div>SB</div>
      <nav>
        <div className="text-gray-400 md:hidden">
          {navIsOpen ? (
            <XIcon
              onClick={toggleNav}
              className="absolute top-0 right-0 z-20"
            />
          ) : (
            <HamburgerIcon
              onClick={toggleNav}
              className="absolute top-0 right-0 z-20"
            />
          )}
          <div
            className={`flex flex-col items-end bg-gray-700 absolute top-0 right-0 ${
              navIsOpen ? 'animate-sideDrawerOpen' : 'animate-sideDrawerClose'
            } origin-right h-full w-3/4`}
          >
            <ol className="flex flex-col items-center md:flex md:flex-row w-full text-2xl pt-16">
              {navItems.map(({ text, href }) => (
                <li
                  className="hover:bg-gray-600 w-full text-center py-5"
                  key={text}
                >
                  <a href={href}>{text}</a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Nav };
