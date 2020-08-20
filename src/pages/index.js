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
                <Col md={3} xs={12}>    
                    <AboutMe />
                </Col>
                <Col md={9} xs={12} style={{ padding: 0}}>
                    <BorderLeft>
                        <Intro />
                        <Lineh />
                        <Contents />
                        <Lineh />
                        {/* <Row><Contents /></Row> */}
                    </BorderLeft>
                </Col>
            </Row>


        </Container>


  )
}



