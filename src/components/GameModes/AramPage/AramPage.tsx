import HeroSection from './sections/HeroSection';
import GameMechanics from './sections/GameMechanics';
import ChampionSystem from './sections/ChampionSystem';
import MapFeatures from './sections/MapFeatures';
import CombatTips from './sections/CombatTips';

const AramPage = () => {
  return (
      <div className="min-h-screen">
        {/* Content */}
        <HeroSection />
        <div className="container mx-auto px-4 py-12 space-y-24">
          <GameMechanics />
          <ChampionSystem />
          <MapFeatures />
          <CombatTips />
        </div>
    </div>
  );
}

export default AramPage;