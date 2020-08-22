import React from "react"
import ItemContainer from "./itemContainer"
import ProjectItem from "./projectItem"
import { useStaticQuery,  graphql } from "gatsby"

import MyContainer from "./container"

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
        <MyContainer>
            {/* <p className="ContentTitle">Projects</p> */}
            <ItemContainer style={{padding: '0'}}>
                <h2>Projects</h2>
            </ItemContainer>
            <ItemContainer>
                <ProjectItem id={"1"} cover={"1.jps"} link={"https://github.com/Lynnes001/mPose_mmWave_sensing"} />
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

        </MyContainer>
  )
}