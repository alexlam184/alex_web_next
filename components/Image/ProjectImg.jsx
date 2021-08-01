import React from 'react';
import Image from 'next/image'
// import { StaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import Img from 'gatsby-image';

// const ProjectImg = ({ filename, alt }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fluid(maxWidth: 1366) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => {
//       const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

//       if (!image) return null;

//       const imageFluid = image.node.childImageSharp.fluid;
//       return <Img alt={alt} fluid={imageFluid} />;
//     }}
//   />
// );

// ProjectImg.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };

const ProjectImg = ({ filename, alt }) => {



  return (
    <>
    <Image src={filename} alt={alt}/>
    </>
  );
}



export default ProjectImg;
