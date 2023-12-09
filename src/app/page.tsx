"use client"

import { useCallback, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Greet from "./greet";
import RandomCat from "./randomCat";

export default function Home() {


    // const fetchRandomCat = useCallback(async () => {
    //     let response = await fetch("https://api.thecatapi.com/v1/images/search");
    //     let data = await response.json();
    //     setRandomCat(data[0].url)
    // }, []);
 
    return (
        <Container>
            <Row>
                <Col>
                    <Greet rustFn={'greet'}/>
                    <Greet rustFn={'second_greet'}/>
                </Col>
            </Row>
            <RandomCat />
        </Container>
    )
}
