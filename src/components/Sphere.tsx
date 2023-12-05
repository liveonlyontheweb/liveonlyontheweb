// import { Effects } from '@react-three/drei';
import { extend, Object3DNode, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// https://docs.pmnd.rs/react-three-fiber/tutorials/typescript#extending-threeelements
// Create our custom element
class CustomUnrealBloomPass extends UnrealBloomPass {}

// Extend so the reconciler will learn about it
extend({ CustomUnrealBloomPass });

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
  interface ThreeElements {
    customUnrealBloomPass: Object3DNode<
      CustomUnrealBloomPass,
      typeof CustomUnrealBloomPass
    >;
  }
}

const Sphere = () => {
  const sphereMash = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (!sphereMash.current) {
      return;
    }

    sphereMash.current.rotation.x = clock.getElapsedTime() * 0.095;
    sphereMash.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <mesh ref={sphereMash} position={[0, 20, 0]}>
      {/* <Effects>
        <customUnrealBloomPass
          threshold={0}
          strength={0.8}
          radius={1.825}
        ></customUnrealBloomPass>
      </Effects> */}

      <sphereGeometry args={[40, 20, 20]}></sphereGeometry>
      <meshBasicMaterial color="#9679ff" wireframe></meshBasicMaterial>
    </mesh>
  );
};

export default Sphere;
