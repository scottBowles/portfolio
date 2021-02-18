import * as React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <main className="flex flex-col">
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  </Layout>
);

const Title = () => <h1>Title</h1>;

export default IndexPage;
