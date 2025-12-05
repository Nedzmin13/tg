import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home/Home';
import ChiSiamo from './pages/ChiSiamo';
import Servizi from './pages/Servizi';
import Preventivo from './pages/Preventivo';
import LavoraConNoi from './pages/LavoraConNoi';

// Importa le pagine di dettaglio
import Sedie from './pages/servizi-dettaglio/Sedie';
import Tavoli from './pages/servizi-dettaglio/Tavoli';
import Cancelli from './pages/servizi-dettaglio/Cancelli';
import Ringhiere from './pages/servizi-dettaglio/Ringhiere';
import Progetti from './pages/Progetti';
import Contatti from './pages/Contatti';
import PrivacyPolicy from './pages/PrivacyPolicy';

const Placeholder = ({ title }) => <div style={{padding: '150px 20px', textAlign: 'center'}}><h1>{title}</h1></div>;

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chi-siamo" element={<ChiSiamo />} />

                {/* Rotte Servizi */}
                <Route path="/servizi" element={<Servizi />} />
                <Route path="/servizi/sedie" element={<Sedie />} />
                <Route path="/servizi/tavoli" element={<Tavoli />} />
                <Route path="/servizi/cancelli" element={<Cancelli />} />
                <Route path="/servizi/ringhiere" element={<Ringhiere />} />

                <Route path="/progetti" element={<Progetti />} />
                <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
                <Route path="/preventivo" element={<Preventivo />} />
                <Route path="/contatti" element={<Contatti />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;