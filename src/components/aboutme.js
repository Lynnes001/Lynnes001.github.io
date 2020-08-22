import React from "react"
import MyContainer from "./container"
import styles from "../styles/aboutme.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {Button, Card} from "react-bootstrap"

import cv from "../data/cv/CV_SongYang_website.pdf"




const User = props => (
    <div>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <h1 className={styles.name}>{props.username}</h1>
      <h2 className={styles.afflation}>{props.afflation}</h2>
      <p className={styles.icons}> 
        <span variant="outline-primary">
          <a href = "https://www.linkedin.com/in/songyang729">
            <FontAwesomeIcon icon={faLinkedin}/></a></span>
        <span variant="outline-secondary">
          <a href = "https://github.com/Lynnes001">
            <FontAwesomeIcon icon={faGithub}/></a></span>
        <span variant="outline-secondary" href = "sea.yang@hotmail.com"><FontAwesomeIcon icon={faEnvelope}/></span>

      </p>
      <div className={styles.nav}>
        <Button variant="outline-info" block>Projects</Button>{' '} <br />
        <Button variant="outline-info" href={cv} block>Download My Vitae</Button>{' '}

      </div>
    </div>
  )

export default function AboutMe() {
    return (
        
            <MyContainer>
                <User
                    username="Song Yang"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/xxxx"
                    afflation=""
                />
            </MyContainer>

        

  )
}