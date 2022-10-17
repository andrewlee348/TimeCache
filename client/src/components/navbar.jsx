import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Nav_Bar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container> 
                <Navbar.Brand href="/">TimeCache</Navbar.Brand>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#/sign_up">Sign-Up</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
};