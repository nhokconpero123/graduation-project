import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage/AboutPage';
import GameplayPage from './components/GameplayPage/GameplayPage';
import HowToPlayPage from './components/HowToPlayPage/HowToPlayPage';
import ContactPage from './components/ContactPage/ContactPage';
import ChampionsPage from './components/ChampionsPage/ChampionsPage';
import ChampionDetailsPage from './components/ChampionsPage/ChampionDetails/ChampionDetailsPage';
import AramPage from './components/GameModes/AramPage/AramPage';
import TFTPage from './components/GameModes/TFTPage/TFTPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1B1F38] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gameplay" element={<GameplayPage />} />
          <Route path="/how-to-play" element={<HowToPlayPage />} />
          <Route path="/community" element={<ContactPage />} />
          <Route path="/champions" element={<ChampionsPage />} />
          <Route path="/champions/:id" element={<ChampionDetailsPage />} />
          <Route path="/game-modes/aram" element={<AramPage />} />
          <Route path="/game-modes/tft" element={<TFTPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;