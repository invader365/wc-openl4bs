import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { SEO } from './components/SEO';
import './App.css';

function App() {
    return (
        <Router>
            <SEO title="openl4bs" description="Welcome to openl4bs - Sharing Knowledge, Building Future." name="openl4bs" type="website" />
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
