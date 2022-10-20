import './App.css';
import Nav_Bar from './components/navbar';
import Main from './components/main';
import Home from './components/home';
import Login from './components/login';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore'

function App() {
    return (
        <div>
            <Nav_Bar />
            <Main />
        </div>
    );
}

export default App;
