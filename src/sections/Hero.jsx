import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <Leva hidden />

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative z-10">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Nalan Liyanage <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">AI/ML Engineer &amp; Data Scientist</p>
        <p className="text-center text-zinc-400 sm:text-lg text-sm max-w-2xl mx-auto font-generalsans">
          Building intelligent AI agents, ML pipelines, and production systems. Open for full-time roles &amp; freelance projects.
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 30], fov: 45, near: 0.1, far: 2000 }}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a
          href="/assets/K.V.N.T.Liyanage.pdf"
          download="K.V.N.T.Liyanage.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative sm:w-fit w-full sm:min-w-96 flex items-center justify-center gap-4 bg-black border border-white/70 hover:border-white text-white font-bold text-xl py-4 px-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_28px_rgba(255,255,255,0.45)] transition-all duration-300 active:scale-95 mx-auto"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
