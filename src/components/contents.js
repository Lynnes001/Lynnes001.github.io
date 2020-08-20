import React from "react"
import ItemContainer from "./itemContainer"
import ProjectItem from "./projectItem"
import { useStaticQuery,  graphql } from "gatsby"


export default function Contents({Children}) {
    // const postContent = useStaticQuery(graphql`
    // query MyQuery {
    //     allMarkdownRemark {
    //       edges {
    //         node {
    //           excerpt(format: PLAIN)
    //           frontmatter {
    //             title
    //             content
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    // console.log(postContent.allMarkdownRemark.edges)
    return (
        <div>
            <ItemContainer>
                <ProjectItem id={"1"} cover={"1.jps"} />
            </ItemContainer>
            {/* <ItemContainer>
                <ProjectItem />
            </ItemContainer>
            <ItemContainer>
                <ProjectItem />
            </ItemContainer>
            <ItemContainer>
                <ProjectItem />
            </ItemContainer> */}

        </div>
  )
}