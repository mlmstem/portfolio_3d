import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return <primitive object={earth.scene} scale={8} position={[0, 0, 0]} rotation={[0, 0, 0]} />;
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const canvasStyle = {
    width: '100%',
    height: isMobile ? '35vh' : '70vh',
  };

  return (
    <Canvas
      className='sm:mt-[-15vh] xl:mt-[15vh] xl:ml-[-3vh]'
      style={canvasStyle}
      frameLoop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60, // Increase FOV for a wider view
        near: 0.1,
        far: 1000,
        position: [-4, 3, 15], // Adjust the Z position for a closer view
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
