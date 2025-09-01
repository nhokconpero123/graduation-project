import { useEffect, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Group, Box3, Vector3, AnimationMixer } from 'three';
import { loadModel } from '../../utils/modelLoader';

interface ChampionModelProps {
  modelUrl: string;
  onError?: () => void;
  onLoadingChange?: (loading: boolean) => void;
}

const ChampionModel = ({ modelUrl, onError, onLoadingChange }: ChampionModelProps) => {
  const modelRef = useRef<Group>(null);
  const mixerRef = useRef<AnimationMixer | null>(null);
  const { camera } = useThree();

  const gltf = useLoader(GLTFLoader, modelUrl, undefined, (xhr) => {
    if (xhr.loaded === xhr.total) {
      onLoadingChange?.(false);
    }
  });

  useEffect(() => {
    const setupModel = async () => {
      if (!modelRef.current || !gltf) return;

      onLoadingChange?.(true);

      try {
        const model = gltf.scene.clone();

        // Clear existing children
        modelRef.current.clear();

        // Add the cloned model
        modelRef.current.add(model);

        // Calculate bounding box
        const box = new Box3().setFromObject(model);
        const size = box.getSize(new Vector3());
        const center = box.getCenter(new Vector3());

        // Normalize size and position
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDimension;
        model.scale.setScalar(scale);

        // Align model to the bottom of the bounding box
      model.position.sub(center.multiplyScalar(scale));
      model.position.y -= box.min.y * scale; // Ensure the model aligns with the box's bottom

        // Set initial rotation
        model.rotation.set(0, Math.PI / 4, 0);

        // Setup camera
        camera.position.set(750, 100, 100);
        camera.lookAt(0, 0, 0);

        onLoadingChange?.(false);
      } catch (error) {
        console.error('Error setting up model:', error);
        onLoadingChange?.(false);
        onError?.();
      }
    };

    setupModel();

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [gltf, camera, onLoadingChange, onError]);

  useEffect(() => {
    const handleError = async () => {
      try {
        const fallbackModel = await loadModel(modelUrl);
        if (fallbackModel) {
          return fallbackModel;
        }
      } catch (fallbackError) {
        console.error('Fallback error loading model:', fallbackError);
        onError?.();
      }
      return null;
    };

    if (!gltf) {
      handleError();
    }
  }, [gltf, modelUrl, onError]);

  return <group ref={modelRef} />;
};

export default ChampionModel;

