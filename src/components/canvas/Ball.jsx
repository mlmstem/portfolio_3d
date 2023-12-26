import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { IcosahedronGeometry } from 'three';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity = {0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale = {2.75}>
        <icosahedronGeometry args = {[1,1]} />
        <meshStandardMaterial 
        color = '#fff8eb'
        polygonOffset
        polygonOffestFacotr ={-5}
        flatShading/>

        <Decal 
        position = {[0,0,1]}
        rotation = {[2 * Math.PI, 0, 6.25]}
        flatShading
        map = {decal} />


      </mesh>
      
    </Float>
  );
};

// Make sure to use the correct variable (icon)
const BallCanvas = ({ icon }) => {
  // Use 'icon' instead of 'url'
  return (
    <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {/* Pass 'icon' to the Ball component */}
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;