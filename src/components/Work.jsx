import React from 'react';
import Img from 'gatsby-image';
import { findImageFluidData } from '../utils';

const projects = [
  {
    name: 'Corcovado Cafe',
    description: 'Coffee Shop Inventory App',
    image: 'corcovadoDesktop.png',
    techUsed: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Pug',
      'Bootstrap',
    ],
    githubUrl:
      'https://github.com/scottBowles/coffee-shop-inventory-application',
    blogEntry: '/#',
    liveUrl: 'https://corcovadocafe.herokuapp.com/',
  },
  {
    name: 'Daily Office Android App',
    description:
      'In-progress Android version of https://www.dailyoffice2019.com/',
    image: 'corcovadoDesktop.png',
    techUsed: [
      'TypeScript',
      'React Native',
      'Expo',
      'React Router',
      'Styled Components',
    ],
    githubUrl: 'https://github.com/scottBowles/do2019-rnative-android',
    blogEntry: '/#',
    liveUrl: '/#',
  },
];

const Project = ({ project, allImages }) => {
  const imgData = findImageFluidData(project.image, allImages);
  if (!imgData) return null;

  return (
    <div className="shadow-test rounded-tl-3xl rounded-br-3xl bg-gradient-to-br bg-test p-8">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Img
        fluid={imgData.childImageSharp.fluid}
        alt="Coffee shop inventory app homepage"
      />
      <p>{project.techUsed.join(' | ')}</p>
      <div>
        <a href={project.githubUrl}>GH</a> |{' '}
        <a href={project.blogEntry}>Blog entry</a> |{' '}
        <a href={project.liveUrl}>Live</a>
      </div>
    </div>
  );
};

const Work = ({ allImages }) => (
  <section className="p-8" id="work">
    <h2 className="pb-8 text-3xl font-bold">Projects</h2>
    {projects.map((project, i) => (
      <Project project={project} allImages={allImages} key={i + project.name} />
    ))}
  </section>
);

export { Work };
