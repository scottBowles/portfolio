import React from 'react';
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { IconContext } from '@react-icons/all-files';

const Contact = () => (
  <section className="p-8" id="contact">
    <h2 className="pb-8 text-4xl font-black text-center">Contact</h2>
    <p className="block p-2">
      I am always delighted to talk code, opportunities, or shared interests.
    </p>
    <p className="block p-2">
      {' '}
      Hit me up at{' '}
      <a
        href="mailto:shbowles@gmail.com"
        className="text-blue-300 hover:underline"
      >
        shbowles@gmail.com
      </a>{' '}
      or on your social media platform of choice!
    </p>
    <IconContext.Provider
      value={{ size: '1.75em', className: 'text-blue-300 hover:text-blue-500' }}
    >
      <ul className="flex justify-around items-center h-32">
        <li>
          <a href="https://twitter.com/scottbcodes">
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shbowles/">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/scottBowles">
            <FiGithub />
          </a>
        </li>
      </ul>
    </IconContext.Provider>
  </section>
);

export { Contact };
