
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
