import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={512}
      />
      {/* <pointLight intensity={0.2} /> */}
      <primitive
        object={computer.scene}
        // scale={isMobile ? 0.3 : 0.45}
        scale={2.5}
        // scale={isMobile ? 0.7 : 0.75}
        position={ [0, -2.2, 0]} // Adjusted positions to center
        // position={isMobile ? [0, -3, -2.2] : [0, -3.2, -1.5]} // Adjusted positions to center
        // rotation={[-0.01, -0.2, -0.1]} // Adjusted rotation to center the object
        rotation-y={0}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      // camera={{
      //   position: isMobile ? [5, 3, 5] : [20, 3, 5],  // Adjusted for mobile
      //   fov: 25,
      // }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers  />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;




