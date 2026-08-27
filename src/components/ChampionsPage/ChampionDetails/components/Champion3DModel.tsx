import { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { AlertCircle, Loader, Maximize2, Minimize2, Pause, Play, RotateCcw } from 'lucide-react';
import { MOUSE } from 'three';
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
  const [animations, setAnimations] = useState<string[]>([]);
  const [animationName, setAnimationName] = useState('');
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [isAnimationLooping, setIsAnimationLooping] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [autoRotate, setAutoRotate] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<{ reset: () => void }>(null);

  useEffect(() => {
    setAnimations([]);
    setAnimationName('');
    setIsAnimationPlaying(true);
  }, [modelUrl]);

  useEffect(() => {
    if (!animations.length) return;
    setAnimationName((current) => animations.includes(current) ? current : animations[0]);
  }, [animations]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(document.fullscreenElement === viewerRef.current);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

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

  const toggleFullscreen = async () => {
    if (!viewerRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await viewerRef.current.requestFullscreen();
    }
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
    <div
      ref={viewerRef}
      className={`relative rounded-lg overflow-hidden bg-black ${isFullscreen ? 'h-screen w-screen' : 'h-[500px]'}`}
      onContextMenu={(event) => event.preventDefault()}
    >
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
            animationName={animationName}
            animationSpeed={animationSpeed}
            isAnimationPlaying={isAnimationPlaying}
            isAnimationLooping={isAnimationLooping}
            onAnimationsChange={setAnimations}
            onError={handleError}
            onLoadingChange={setIsLoading}
          />
          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            screenSpacePanning={true}
            mouseButtons={{
              LEFT: MOUSE.ROTATE,
              MIDDLE: MOUSE.PAN,
              RIGHT: MOUSE.ROTATE
            }}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      {isLoading && <LoadingFallback />}

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 rounded-lg bg-black/70 p-3 backdrop-blur-sm">
        <button
          type="button"
          onClick={() => controlsRef.current?.reset()}
          aria-label="Reset camera"
          title="Reset camera"
          className="rounded-md bg-[#2A2F4C] p-2 text-white hover:bg-[#C89B3C] hover:text-black"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setAutoRotate((current) => !current)}
          aria-pressed={autoRotate}
          className={`rounded-md px-3 py-2 text-sm ${autoRotate ? 'bg-[#C89B3C] text-black' : 'bg-[#2A2F4C] text-white'}`}
        >
          Auto rotate
        </button>
        {animations.length > 0 && (
          <>
            <select
              value={animationName}
              onChange={(event) => setAnimationName(event.target.value)}
              aria-label="Select animation"
              className="max-w-40 rounded-md bg-[#2A2F4C] px-2 py-2 text-sm text-white"
            >
              {animations.map((animation) => <option key={animation}>{animation}</option>)}
            </select>
            <button
              type="button"
              onClick={() => setIsAnimationPlaying((current) => !current)}
              aria-label={isAnimationPlaying ? 'Pause animation' : 'Play animation'}
              title={isAnimationPlaying ? 'Pause animation' : 'Play animation'}
              className="rounded-md bg-[#2A2F4C] p-2 text-white hover:bg-[#C89B3C] hover:text-black"
            >
              {isAnimationPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsAnimationLooping((current) => !current)}
              aria-pressed={isAnimationLooping}
              className={`rounded-md px-3 py-2 text-sm ${isAnimationLooping ? 'bg-[#C89B3C] text-black' : 'bg-[#2A2F4C] text-white'}`}
            >
              Loop
            </button>
            <label className="flex items-center gap-2 text-xs text-white">
              Speed
              <input
                type="range"
                min="0.25"
                max="2"
                step="0.25"
                value={animationSpeed}
                onChange={(event) => setAnimationSpeed(Number(event.target.value))}
                aria-label="Animation speed"
              />
            </label>
          </>
        )}
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          className="ml-auto rounded-md bg-[#2A2F4C] p-2 text-white hover:bg-[#C89B3C] hover:text-black"
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default Champion3DModel;


