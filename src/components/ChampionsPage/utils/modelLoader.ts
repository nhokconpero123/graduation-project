import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const getModelPath = (championId: string, skinId: string = 'default') => {
  // Handle default skin
  if (skinId === 'default') {
    return `/model/${championId.toLowerCase()}/default/${championId.toLowerCase()}.glb`;
  }
  
  // Convert kebab case back to proper skin name format
  const skinName = skinId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Construct the path with proper encoding for spaces
  return `/model/${championId.toLowerCase()}/skins/${encodeURIComponent(skinName)}/${encodeURIComponent(skinName)}.glb`;
};

export const loadModel = async (modelUrl: string): Promise<any> => {
  const loader = new GLTFLoader();
  
  return new Promise((resolve, reject) => {
    loader.load(
      modelUrl,
      (gltf) => {
        resolve(gltf);
      },
      (progress) => {
        console.log(`Loading model: ${(progress.loaded / progress.total * 100)}%`);
      },
      (error) => {
        console.error('Error loading model:', error);
        reject(new Error(`Failed to load model: ${modelUrl}`));
      }
    );
  });
};