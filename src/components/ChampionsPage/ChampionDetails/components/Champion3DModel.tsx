import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { AlertCircle, Loader } from 'lucide-react';
import ChampionModel from './ChampionModel3D';

interface Champion3DModelProps {
  name: string;
  modelUrl: string;
}

const LoadingFallback = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <Loader className="w-8 h-8 text-[#C89B3C] animate-spin mx-auto mb-2" />
      <p className="text-[#C89B3C]">Loading model...</p>
    </div>
  </div>
);

const ErrorDisplay = ({ name, onRetry }: { name: string; onRetry: () => void }) => (
  <div className="text-center p-8">
    <AlertCircle className="w-12 h-12 text-[#C89B3C] mx-auto mb-4" />
    <h3 className="text-xl font-display text-[#C89B3C] mb-2">3D Preview Unavailable</h3>
    <p className="text-gray-400 mb-4">
      We couldn't load the 3D model for {name}. Please try again later.
    </p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-[#C89B3C] text-black rounded-lg hover:bg-[#A67B2D] transition-colors"
    >
      Try Again
    </button>
  </div>
);

const Champion3DModel = ({ name, modelUrl }: Champion3DModelProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setKey(prev => prev + 1);
  };

  const handleError = () => {
    console.error(`Failed to load model: ${modelUrl}`);
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-[500px] rounded-lg overflow-hidden bg-[#1B1F38] flex items-center justify-center"
      >
        <ErrorDisplay name={name} onRetry={handleRetry} />
      </motion.div>
    );
  }

  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden bg-black">
      <Canvas
        key={key}
        camera={{ position: [0, 2, 5], fov: 45 }}
        shadows
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ChampionModel
            modelUrl={modelUrl}
            onError={handleError}
            onLoadingChange={setIsLoading}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      {isLoading && <LoadingFallback />}
    </div>
  );
};

export default Champion3DModel;


