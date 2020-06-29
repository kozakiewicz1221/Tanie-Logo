import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Logasy = function() {
  return (
    <StaticQuery
      query={graphql`
        query clientquery {
          allFile(filter: { relativeDirectory: { eq: "logasy/picked" } }) {
            edges {
              node {
                id
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className=''>
          <div className='flex flex-row flex-wrap'>
            {data.allFile.edges.map((logo) => (
              <Img
                className='w-1/3 md:w-1/5 lg:w-1/4 xl:w-1/6 '
                fluid={logo.node.childImageSharp.fluid}
              />
            ))}
          </div>
        </div>
      )}
    />
  );
};
export default Logasy;
