import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const computer1 = useGLTF('./computer/scene.gltf');

  return (
    <>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <ambientLight intensity={0.5} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <primitive object={computer.scene} scale={isMobile ? 0.35 : 0.6} position={isMobile ? [-3, -2.8, -1.2] : [-4.5, -3.7, -2.5]} rotation={[-0.01, -0.35, -0.1]} />
      </mesh>

      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <ambientLight intensity={0.5} />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
         {/* Adjust the rotation for facing towards the other computer */}
         <primitive object={computer1.scene} scale={isMobile ? 0.2 : 0.43} position={isMobile ? [-6.5, -0.7, -1] : [-13, -1.7, -1.5]} rotation={[0, -1.22 * Math.PI , 0]} />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
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

  return (
    <Canvas frameLoop="demand" shadows camera={{ position: [20, 3, 5], fov: 7 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;