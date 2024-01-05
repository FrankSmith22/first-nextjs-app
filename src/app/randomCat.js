"use client"

import { useCallback, useState } from "react";
import { Response, fetch, ResponseType } from '@tauri-apps/api/http';
import { writeBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';
import { Row, Col, Button } from 'reactstrap';

export default function RandomCat() {
    const [randomCatUrl, setRandomCatUrl] = useState("");

    const writeToFile = useCallback(async () => {
        const image = await fetch(randomCatUrl, {
            method: "GET",
            timeout: 30,
            responseType: ResponseType.Binary
        })
        const imageArray = await image.data
        const fileName = randomCatUrl.slice(randomCatUrl.search(/(\w+)(\.\w+)+(?!.*(\w+)(\.\w+)+)/))
        await writeBinaryFile(fileName, imageArray, { dir: BaseDirectory.Desktop })
    }, [randomCatUrl])

    const fetchRandomCat = useCallback(async () => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search", {
            method: "GET",
            timeout: 30,
        });
        setRandomCatUrl(`${response.data[0].url}`)
    }, [randomCatUrl])

    return (
        <>
            <Row>
                <Col>
                    <Button color="primary" onClick={fetchRandomCat}>
                        Random cat!
                    </Button>
                </Col>
            </Row>
            {randomCatUrl ? <>
                <Row>
                    <Col>
                        <Button color="success" onClick={writeToFile}>Write image to local disk!</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={randomCatUrl} alt="kiggy" />
                    </Col>
                </Row></> : <></>}
        </>
    )
}
