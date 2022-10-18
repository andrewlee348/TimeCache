import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import Nav_Bar from './navbar';

export default function Home(props) {
    const [caption, setCaption] = useState("");
    const [prompt, setPrompt] = useState("");
    const [date, setDate] = useState("");
    const [entry, setEntry] = useState("")
    const [entries, setEntries] = useState("")

    useEffect(() => {
        // get entries from "getEntries" then set entries using "setEntries"
        // display each entry below
    }), []

    const onSubmit = evt => {
        evt.preventDefault();
        let data = {
            "uid": props.currentUser.uid,
            "caption": caption,
            "prompt": prompt,
            "entry": entry,
            "date": date,
            "image": ""
        }
        fetch('https://time-cache.uc.r.appspot.com/addEntry', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    };

    return (
        <div className="App">
            <Nav_Bar />
            <Container>
                <Form className="mb-5" onSubmit={onSubmit}>
                    <Form.Group controlId="formCaption">
                        <Form.Label>
                            Caption
                        </Form.Label>
                        <Form.Control type="Caption" placeholder="Enter Caption Here" onChange={e => setCaption(e.target.value)}/>
                        <Form.Text>
                            Write a short caption for your TimeCache entry
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Image Prompt
                        </Form.Label>
                        <Form.Control type="Image Prompt" placeholder="Enter Image Prompt Here" onChange={e => setPrompt(e.target.value)}/>
                        <Form.Text>
                            Write a detailed description to generate your image
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            TimeCache Entry
                        </Form.Label>
                        <Form.Control type="Entry" placeholder="Enter Image Prompt Here" onChange={e => setEntry(e.target.value)}/>
                        <Form.Text>
                            Write a your TimeCache entry
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Date
                        </Form.Label>
                        <Form.Control type="Date" placeholder="Enter Image Prompt Here" onChange={e => setDate(e.target.value)}/>
                        <Form.Text>
                            Write a detailed description to generator your image
                        </Form.Text>
                    </Form.Group>
                    <Button variant="secondary" type='submit'>Save Entry</Button>
                </Form>
            </Container>

            <Container>
                {/* <Form className="mb-5">
                    <Row>
                        <Col md>
                            <Form.Group controlId="formEmail">
                                <Form.Label>
                                    Email Address
                                </Form.Label>
                                <Form.Control type="email" placeholder="Example@email.com" />
                                <Form.Text className="text-muted">
                                    We'll never share your email address, trust us!
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group controlId="formPassword">
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="secondary" type='submit'>Login</Button>
                        </Col>
                    </Row>
                </Form> */}
                <Card className="mb-5" style={{ color: "#000"}}>
                    <Card.Img src="https://images.fineartamerica.com/images-medium-large-5/race-point-light-sunset-square-bill-wakeley.jpg"/>
                    <Card.Body>
                        <Card.Title>
                            Card Example
                        </Card.Title>
                        <Card.Text>
                            This is an example of react bootstrap cards
                        </Card.Text>
                        <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
                <Breadcrumb>
                    <Breadcrumb.Item>Test1</Breadcrumb.Item>
                    <Breadcrumb.Item>Test2</Breadcrumb.Item>
                    <Breadcrumb.Item active>Test3</Breadcrumb.Item>
                </Breadcrumb>
                <Alert variant="primary">This is a button</Alert>
                <Button>Test Button</Button>
            </Container>
        </div>
    )
}