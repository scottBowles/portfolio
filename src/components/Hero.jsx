import React from 'react';

const Hero = () => (
  <section className="mx-6 pt-44 flex flex-col h-screen z-0" id="hero">
    <h1 className="text-5xl font-black tracking-tight mb-5">Scott Bowles</h1>
    <h3 className="text-3xl font-bold text-gray-500 mb-7">
      Full Stack MERN + React Native Developer
    </h3>
    <p className="text-gray-400 leading-snug mb-14">
      I am a full-stack developer based in Pittsburgh, PA specializing in the
      MERN stack + React Native. If I'm not writing code, I'm probably xing.
    </p>
    <a
      href="mailto:shbowles@gmail.com"
      className="bg-blue-900 hover:bg-blue-800 border border-blue-900 rounded-full self-center shadow-btn px-14 py-4 text-lg text-blue-300 font-semibold"
    >
      Contact Me
    </a>
  </section>
);

export { Hero };
