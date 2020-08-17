import React from "react"
import AboutMe from "../components/aboutme"
import Contents from "../components/contents"
import BorderLeft from "../components/borderleft"
import Lineh from "../components/lineh"
import Intro from "../components/intro"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../styles/global.css"
import { Container, Row, Col} from "react-bootstrap"

export default function Home() {
    return (
        <Container fluid> 
            <Row>
                <Col sm={3}>    
                    <AboutMe />
                </Col>
                <Col sm={9} style={{ padding: 0}}>
                    <BorderLeft>
                        <Row><Intro /></Row>
                        <Lineh />
                        <Row><Contents /></Row>
                        <Lineh />
                        <Row><Contents /></Row>
                    </BorderLeft>
                    
                </Col>
            </Row>


        </Container>


  )
}



