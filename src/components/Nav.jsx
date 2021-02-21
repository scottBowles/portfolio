import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { FiX } from '@react-icons/all-files/fi/FiX';
import { IconContext } from '@react-icons/all-files';

const navItems = [
  {
    text: 'Home',
    href: '/#top',
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
  const [isInitialNavLoad, setIsInitialNavLoad] = useState(true);

  const closeNav = () => setNavIsOpen(false);
  const toggleNav = () => setNavIsOpen(!navIsOpen);

  useEffect(() => {
    if (navIsOpen) setIsInitialNavLoad(false);
  }, [navIsOpen]);

  return (
    <header className="flex justify-between items-center">
      {/* <div className="font-italianno text-4xl ml-4 mt-3">SB</div> */}
      <nav>
        <div className="md:hidden">
          <button type="button">
            {navIsOpen ? (
              <IconContext.Provider
                value={{
                  className: 'absolute top-3 right-4 z-20 hover:text-blue-600',
                  size: '3em',
                }}
              >
                <FiX onClick={toggleNav} />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{
                  className: 'absolute top-3 right-4 z-20 hover:text-blue-600',
                  size: '3em',
                }}
              >
                <FiMenu onClick={toggleNav} />
              </IconContext.Provider>
            )}
          </button>
          <OutsideClickHandler onOutsideClick={closeNav}>
            <div
              className={`flex flex-col items-end bg-gray-800 absolute top-0 right-0 h-full w-3/4 z-10 pt-8 ${
                isInitialNavLoad ? 'opacity-0' : 'opacity-100'
              } ${
                navIsOpen ? 'animate-sideDrawerOpen' : 'animate-sideDrawerClose'
              } origin-right`}
            >
              <ol className="flex flex-col items-center md:flex md:flex-row w-full text-2xl pt-16">
                {navItems.map(({ text, href }) => (
                  <a
                    href={href}
                    onClick={closeNav}
                    key={text}
                    className="hover:bg-gray-600 hover:text-blue-400 w-full text-center py-5"
                  >
                    <li>{text}</li>
                  </a>
                ))}
              </ol>
            </div>
          </OutsideClickHandler>
        </div>
      </nav>
    </header>
  );
};

export { Nav };
