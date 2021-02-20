import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

const IndexPage = ({ data }) => (
  <Layout>
    <main className="flex flex-col">
      <Hero />
      <Work allImages={data.allFile.nodes} />
      <About />
      <Contact />
    </main>
  </Layout>
);

export const query = graphql`
  query allImages {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`;

export default IndexPage;
