"use client"

import { useCallback, useState } from "react";
import { Response, fetch } from '@tauri-apps/api/http';
import { Container, Row, Col, Button } from 'reactstrap';

export default function RandomCat() {
    const [randomCat, setRandomCat] = useState("");

    const fetchRandomCat = useCallback(async () => {
        const response: Response<String> = await fetch("https://api.thecatapi.com/v1/images/search", {
            method: "GET",
            timeout: 30,
        });
        setRandomCat(`${response.data[0].url}`)
    }, [])
 
    return (
        <>
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
        </>
    )
}
