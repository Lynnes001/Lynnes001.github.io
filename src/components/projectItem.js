import React from "react"
import styles from "../styles/projectItem.module.css"
import { useStaticQuery,  graphql } from "gatsby"
// import Img from "gatsby-image"
import Media from 'react-bootstrap/Media'

// var Img = require('react-image-holder');

export default function ProjectItem(props){

    // var { id, cover, ...other } = this.props;
    // console.log(props)
    // console.log(cover)
    const queryData = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(filter: {frontmatter: {index: {eq: "0"}}}) {
            edges {
            node {
                excerpt(format: PLAIN)
                frontmatter {
                content
                title
                index
                }
            }
            }
        }
        file(relativePath: {eq: "covers/mpose_cover.jpg"}) {
          childImageSharp {
            fluid (maxWidth: 500, quality: 100) {
              aspectRatio
              sizes
              base64
              src
              srcSet
            }
          }
        }
      }
      
    `)
    let imgSrc = queryData.file.childImageSharp.fluid.src;
    let data = queryData.allMarkdownRemark.edges[0].node.frontmatter;

    return (
        <div className={styles.pitems}>
            <ul className="list-unstyled">
                <h4>{data.title}</h4>
                <Media as="li">
                    <img
                    width={180}
                    height={150}
                    className="mr-3"
                    src={imgSrc}
                    alt="mPose Cover"
                    />
                    <Media.Body>
                        <p>{data.content}</p>
                    </Media.Body>
                </Media>
            </ul>
        </div>

    )

}



