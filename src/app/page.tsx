import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Greet from "./greet";
import RandomCat from "./randomCat";
import ScriptRun from "./scriptRun";

export default function Home() {
 
    return (
        <Container>
            <Row>
                <Col>
                    <Greet rustFn={'greet'}/>
                    <Greet rustFn={'second_greet'}/>
                </Col>
            </Row>
            <RandomCat />
            <ScriptRun />
        </Container>
    )
}
