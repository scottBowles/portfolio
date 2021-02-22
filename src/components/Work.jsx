import React from 'react';
import Img from 'gatsby-image';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { HiExternalLink } from '@react-icons/all-files/hi/HiExternalLink';

import { IconContext } from '@react-icons/all-files';
import { graphql, useStaticQuery } from 'gatsby';

const Project = ({ project }) => (
  <div className="shadow-subtle rounded-tl-3xl rounded-br-3xl bg-gradient-to-br bg-neumorphic p-8 mb-16">
    <h3 className="text-gray-300 uppercase text-xl font-semibold tracking-wide pb-4 text-center leading-snug">
      {project.name}
    </h3>
    <p className="italic text-gray-400 pb-9 leading-snug text-center">
      {project.description}
    </p>
    <Img
      fluid={project.image.childImageSharp.fluid}
      alt="Coffee shop inventory app homepage"
      className="mb-4"
    />
    <ul className="text-sm tracking-wider flex flex-wrap justify-between -mx-1 mb-7">
      {project.techUsed.map((tech) => (
        <li className="px-1">{tech}</li>
      ))}
    </ul>
    <ul className="flex justify-between items-center">
      <li>
        <a
          href={project.githubUrl}
          title={`${project.name} Github`}
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{
              size: '1.5em',
              className: 'text-blue-300 hover:text-blue-500',
            }}
          >
            <FaGithub />
          </IconContext.Provider>
        </a>
      </li>
      <li>
        <a href={project.blogEntry} target="_blank" rel="noreferrer">
          <p className="text-blue-300 font-semibold hover:underline">
            Blog entry
          </p>
        </a>
      </li>
      <li>
        <a
          href={project.liveUrl}
          title={`${project.name} Live`}
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{
              size: '1.75em',
              className: 'text-blue-300 hover:text-blue-500',
            }}
          >
            <HiExternalLink />
          </IconContext.Provider>
        </a>
      </li>
    </ul>
  </div>
);

const Work = () => {
  const {
    allProjectsJson: { nodes },
  } = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allProjectsJson {
          nodes {
            id
            name
            description
            techUsed
            githubUrl
            blogEntry
            liveUrl
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <section className="p-8" id="work">
      <h2 className="pb-16 text-4xl font-black text-center">Projects</h2>
      {nodes.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </section>
  );
};
export { Work };
