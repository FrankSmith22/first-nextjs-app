"use client"

import { Command } from '@tauri-apps/api/shell'
import { useState } from 'react';
import { Row, Col, Button } from 'reactstrap';


export default function ScriptRun() {

    const [ scriptResult, setScriptResult ] = useState("")

    const handleClick = async () => {
        const command = new Command('run-python-script', ["-c", "print('hello world')"])
        command.on('error', error => console.error(`command error: "${error}"`));
        command.stdout.on('data', line => setScriptResult(line));
        command.stderr.on('data', line => setScriptResult(line));

        await command.execute();
    }
    return (
        <Row>
            <Col>
                <Button className="btn-success" onClick={handleClick}>run python script</Button>
                &nbsp; <span>{scriptResult}</span>
            </Col>
        </Row>
    )
}