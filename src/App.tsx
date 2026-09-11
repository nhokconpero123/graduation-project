// App entry point. This keeps the router configuration centralized and easy to maintain
// as the site grows, while the shared layout remains consistent across every page.
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

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/gameplay', element: <GameplayPage /> },
  { path: '/how-to-play', element: <HowToPlayPage /> },
  { path: '/community', element: <ContactPage /> },
  { path: '/champions', element: <ChampionsPage /> },
  { path: '/champions/:id', element: <ChampionDetailsPage /> },
  { path: '/game-modes/aram', element: <AramPage /> },
  { path: '/game-modes/tft', element: <TFTPage /> },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1B1F38] text-white">
        <Navigation />
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;