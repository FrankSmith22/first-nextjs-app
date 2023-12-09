"use client"

import { useCallback, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Greet from "./greet";

export default function Home() {

    const [randomCat, setRandomCat] = useState("");

    const fetchRandomCat = useCallback(async () => {
        let response = await fetch("https://api.thecatapi.com/v1/images/search");
        let data = await response.json();
        setRandomCat(data[0].url)
    }, []);
 
    return (
        <Container>
            <Row>
                <Col>
                    <Greet rustFn={'greet'}/>
                    <Greet rustFn={'second_greet'}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button color="primary" onClick={fetchRandomCat}>
                        Random cat!
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {randomCat ? <img src={randomCat} alt="kiggy"/> : <></>}
                </Col>
            </Row>
        </Container>
    )
}
