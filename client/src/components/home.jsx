// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import { getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB48Y5dXU9LEzF90v_HpwjRuhpdn5E3YRU",
//     authDomain: "montage-my-life.firebaseapp.com",
//     projectId: "montage-my-life",
//     storageBucket: "montage-my-life.appspot.com",
//     messagingSenderId: "313907210763",
//     appId: "1:313907210763:web:074d392c625a87e21e350e",
//     measurementId: "G-9YD1RBJ11M"
// };

// Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);

// const auth = getAuth(app);

export default function Home() {
    // const [caption, setCaption] = useState("");
    // const [prompt, setPrompt] = useState("");
    // const [date, setDate] = useState("");

    // const onSubmit = evt => {
    //     evt.preventDefault();
    //     fetch('https://timecache-365700.wl.r.appspot.com/addEntry', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             "uid": auth.currentUser.uid,
    //             "caption": caption,
    //             "prompt": prompt,
    //             "date": date
    //         })
    //     })
    //     document.getElementById("form").reset();
    // };

    // let data = {
    //     prompt: "prompt",
    //     caption: "caption",
    //     date: "date", 
    //     imageURL: "https://images.fineartamerica.com/images-medium-large-5/race-point-light-sunset-square-bill-wakeley.jpg"
    //   }

    return (
        <div className="App">
            {/* <Container>
                <Form className="mb-5">
                    <Form.Group controlId="formCaption">
                        <Form.Label>
                            Caption
                        </Form.Label>
                        <Form.Control type="Caption" placeholder="Enter Caption Here"/>
                        <Form.Text>
                            Write a short caption for your diary entry
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Image Prompt
                        </Form.Label>
                        <Form.Control type="Image Prompt" placeholder="Enter Image Prompt Here"/>
                        <Form.Text>
                            Write a detailed description to generator your image
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Image Prompt
                        </Form.Label>
                        <Form.Control type="Image Prompt" placeholder="Enter Image Prompt Here"/>
                        <Form.Text>
                            Write a detailed description to generator your image
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Date
                        </Form.Label>
                        <Form.Control type="Image Prompt" placeholder="Enter Image Prompt Here"/>
                        <Form.Text>
                            Write a detailed description to generator your image
                        </Form.Text>
                    </Form.Group>
                    <Button variant="secondary" type='submit'>Save Entry</Button>
                </Form>
            </Container> */}
            {/* <form onSubmit={onSubmit} controlId="formEntry">
                <input 
                    type="text" 
                    id="caption" 
                    placeholder="Caption"
                    onChange={(e)=>setCaption(e.target.value)}></input> 

                <br></br>
                <input 
                    type="text" 
                    id="prompt" 
                    placeholder="Prompt"
                    onChange={(e)=>setPrompt(e.target.value)}></input>
                    
                <br></br>
                <input
                    type="date" 
                    id="date" 
                    onChange={(e)=>setDate(e.target.value)}></input>
                <br></br>
                <button type="submit" id="submit">Submit</button>
            </form> */}
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