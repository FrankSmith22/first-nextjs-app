"use client"

import { useCallback, useState } from "react";
import { invoke } from '@tauri-apps/api/tauri';
import { Container, Row, Col, Button } from 'reactstrap';

export default function RandomCat() {
    const [randomCat, setRandomCat] = useState("");

    const fetchRandomCat = useCallback(async () => {
        invoke<string>('get_random_cat')
            .then(result => setRandomCat(result))
            .catch(console.error)
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
                    {/* {randomCat ? <img src={randomCat} alt="kiggy"/> : <></>} */}
                    {randomCat}
                </Col>
            </Row>
        </>
    )
}
