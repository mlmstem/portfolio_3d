import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const  Helmet = ({ isMobile }) => {
  const  Helmet = useGLTF('./Helmet/scene.gltf');

  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <ambientLight intensity={0.5} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <primitive object={Helmet.scene} scale={isMobile ? 0.25 : 0.4} position={isMobile ? [-0.5, -2.0, -1.2] : [-4.5, -3.0, -2.5]} rotation={[-0.01, -0.35, -0.1]} />
      </mesh>

    </>
  );
};

const HelmetCanvas = ({ isVisible }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };


  }, []);

  if (!isVisible) {
    // Don't render the Canvas if isVisible is false
    return null;
  }
  
  return (
    <Canvas frameLoop="demand" shadows camera={{ position: [20, 3, 5], fov: 15}} gl={{ preserveDrawingBuffer: false }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Helmet isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HelmetCanvas;