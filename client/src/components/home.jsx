import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

export default function Home() {
    return (
        <div className="App">
            <Container>
                <Form className="mb-5">
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
                </Form>
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