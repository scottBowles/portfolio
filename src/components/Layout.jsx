import React from 'react';
import { Nav } from './Nav';

function Layout({ children }) {
  return (
    <>
      {/* <Head /> */}
      <div className="bg-gray-800 text-gray-300 h-screen w-screen">
        <Nav />
        {children}
      </div>
    </>
  );
}

export { Layout };
