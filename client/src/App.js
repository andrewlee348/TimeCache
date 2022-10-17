import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import Nav_Bar from './components/navbar';
import Home from './components/home';

function App() {
    return (
        <div>
            <Nav_Bar />
            <Home />
        </div>
    );
}

export default App;
