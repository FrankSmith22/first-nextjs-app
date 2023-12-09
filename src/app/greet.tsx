'use client'

import { useEffect, useState } from "react"
import { invoke } from '@tauri-apps/api/tauri';

interface Props {
    rustFn: string
}

export default function Greet({ rustFn }: Props) {
    const [greeting, setGreeting] = useState('');

    useEffect( () => {
        invoke<string>(rustFn, { nameString: 'BEAST' })
            .then(result => setGreeting(result))
            .catch(console.error)
    }, [])

    // Necessary because we will have to use Greet as a component later
    return(
        <div>{greeting}</div>
    )
}