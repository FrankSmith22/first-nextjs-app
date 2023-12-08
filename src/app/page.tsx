"use client"

import { useCallback, useState } from "react";

export default function Home() {

    const [randomCat, setRandomCat] = useState("");

    const fetchRandomCat = useCallback(async () => {
        console.log("helloooooo");
        let response = await fetch("https://api.thecatapi.com/v1/images/search");
        let data = await response.json();
        setRandomCat(data[0].url)
    }, []);
 
    return (
        <main>
            <button onClick={fetchRandomCat}>
                Random cat!
            </button>
            {randomCat ? <img src={randomCat} alt="kiggy"/> : <></>}
        </main>
    )
}
