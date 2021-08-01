import React from 'react';
import Image from 'next/image'
import pic from '../../public/icon/profile.jpg'
// import { StaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
// import Img from 'gatsby-image';

// const AboutImg = ({ filename, alt }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fixed(width: 350) {
//                   ...GatsbyImageSharpFixed
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

//       const imageFixed = image.node.childImageSharp.fixed;
//       return (<Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />
      
//       );
//     }}
//   />
// );

// AboutImg.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };


//new
const AboutImg = ({ filename, alt }) => {



  return (
    <>
    {/* {filename}
    {alt} */}
    {/* <img src={filename} alt={alt}></img> */}
    <Image src={pic} alt={alt} width={450} height={450}/>
    </>
  );
}



export default AboutImg;
