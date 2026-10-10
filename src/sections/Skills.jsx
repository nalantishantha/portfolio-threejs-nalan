import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls, Preload } from '@react-three/drei';
import { mySkills } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';

// Generate random spherical coordinates for the icons to form a cloud
const getPosition = (index, total) => {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;
  const radius = 6.5; // Radius of the sphere
  return [
    radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.sin(theta) * Math.sin(phi),
    radius * Math.cos(phi)
  ];
};

const SkillNodes = () => {
  const groupRef = useRef();

  // Slowly rotate the entire cloud continuously
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {mySkills.map((skill, index) => {
        const position = getPosition(index, mySkills.length);
        return (
          <Float key={skill.id} speed={2} rotationIntensity={1} floatIntensity={1.5} position={position}>
            <Html center transform sprite>
              <div className="flex flex-col items-center justify-center group cursor-pointer pointer-events-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:scale-110 shadow-xl shadow-black/50">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray_gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium bg-black/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </Html>
          </Float>
        );
      })}
    </group>
  );
};

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <h3 className="head-text">My Technical Skills</h3>
      <p className="text-white-600 mt-2 mb-10 text-center max-w-2xl mx-auto">
        I have mastered a wide range of technologies, with a strong focus on AI Product Development. A constellation of technologies I use to build robust, intelligent, and scalable applications. You can drag to rotate the cloud!
      </p>

      <div className="w-full h-[350px] sm:h-[500px] border border-white/10 bg-black/20 rounded-3xl overflow-hidden relative cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 0, 16], fov: 60 }}>
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <SkillNodes />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Skills;
