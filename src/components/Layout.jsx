import React from 'react';
import { Nav } from './Nav';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@fontsource/italianno';

function Layout({ children }) {
  return (
    <>
      {/* <Head /> */}
      <div className="bg-gray-900 text-gray-300 min-h-screen w-screen">
        <Nav />
        {children}
      </div>
    </>
  );
}

export { Layout };
