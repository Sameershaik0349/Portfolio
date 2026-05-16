import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PointMaterial, Points } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField() {
  const ref = useRef<any>(null);
  
  // Create random positions for stars in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(15000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Slight mouse reaction
      const mouseX = (state.pointer.x * Math.PI) / 10;
      const mouseY = (state.pointer.y * Math.PI) / 10;
      
      ref.current.rotation.x += (mouseY - ref.current.rotation.x) * 0.05;
      ref.current.rotation.y += (mouseX - ref.current.rotation.y) * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function GalaxyBackground() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'radial-gradient(circle at center, #0a0b1e 0%, #050510 100%)' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
        {/* We can also add default Stars from drei for extra depth */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Nebulas using colored lights */}
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} color="#7000ff" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#d800ff" intensity={2} />
        <pointLight position={[0, 0, 5]} color="#00d4ff" intensity={1} />
      </Canvas>
    </div>
  );
}
