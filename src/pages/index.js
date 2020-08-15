import React from "react"
import Header from "../pages/components/header"
import AboutMe from "../pages/components/aboutme"
import Contents from "../pages/components/contents"

import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { Container, Row, Col} from "react-bootstrap"

export default function Home() {
    return (
        <Container fluid> 
            <Header />
            <Row>
                <Col sm={4}>     
                    <AboutMe />
                </Col>
                <Col sm={8}>
                    <Contents />
                </Col>
            </Row>


        </Container>


  )
}



