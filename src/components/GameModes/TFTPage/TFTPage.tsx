import HeroSection from './sections/HeroSection';
import SetMechanics from './sections/SetMechanics';
import CompBuilder from './sections/CompBuilder';
import ItemGuide from './sections/ItemGuide';
import AugmentSystem from './sections/AugmentSystem';
import TipsSection from './sections/TipsSection';

const TFTPage = () => {
  return (
    <div className="min-h-screen">
      {/* Content */}
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <SetMechanics />
        <CompBuilder />
        <ItemGuide />
        <AugmentSystem />
        <TipsSection />
      </div>
    </div>
  );
};

export default TFTPage;
