import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [hasCopiedPhone, setHasCopiedPhone] = useState(false);
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      setTimeout(() => {
        globeRef.current.pointOfView({ lat: 7.8731, lng: 80.7718, altitude: 2 }, 2000);
      }, 1000);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nalantishantha@gmail.com');
    setHasCopiedEmail(true);
    setTimeout(() => setHasCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+94 715719663');
    setHasCopiedPhone(true);
    setTimeout(() => setHasCopiedPhone(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1: Name */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/avatar.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-cover rounded-xl" />

            <div>
              <p className="grid-headtext">Hi, I’m Nalan Liyanage</p>
              <div className="grid-subtext">
                <p>I am an AI/ML Intern at Acentura, passionate about Machine Learning, Generative AI, and backend-driven data systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* HTML Grid of SVGs replacing grid2.png */}
            <div className="w-full sm:h-[276px] h-fit flex justify-center items-center">
              <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
                <img src="/assets/langgraph-color.svg" alt="LangGraph" className="w-8 h-8 object-contain filter grayscale opacity-70" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8 object-contain filter grayscale opacity-70" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node" className="w-8 h-8 object-contain filter grayscale opacity-70" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 object-contain filter grayscale opacity-70" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" className="w-8 h-8 object-contain filter grayscale opacity-70" />
                <img src="/assets/azure-color.svg" alt="Azure" className="w-8 h-8 object-contain filter grayscale opacity-70" />
              </div>
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <div className="grid-subtext">
                <p>I specialize in Python, JavaScript, and SQL, focusing on Machine Learning frameworks like TensorFlow, Scikit-learn, and LangChain, as well as backend development with Express.js and Flask.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Globe */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 7.8731, lng: 80.7718, text: 'Sri Lanka', color: 'white', size: 15 }]}
                ringsData={[{ lat: 7.8731, lng: 80.7718 }]}
                ringColor={() => 'rgba(0, 255, 0, 0.5)'}
                ringMaxRadius={5}
                ringPropagationSpeed={3}
                ringRepeatPeriod={1000}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <div className="grid-subtext">
                <p>I'm based in Colombo, Sri Lanka. I am open to working onsite or hybrid in Colombo, as well as remote for worldwide opportunities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Passion */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for AI & Data</p>
              <div className="grid-subtext">
                <p>
                  I am a Computer Science undergraduate at UCSC eager to apply AI and data-driven engineering to solve real-world problems. My true passion lies in Machine Learning, Deep Learning, and Data Engineering, building systems for forecasting, automation, and intelligent decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Contact */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2 mt-4">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container mt-4" onClick={handleCopyEmail}>
                <img src={hasCopiedEmail ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy email" />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">nalantishantha@gmail.com</p>
              </div>
              <div className="copy-container mt-2" onClick={handleCopyPhone}>
                <img src={hasCopiedPhone ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy phone" />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white">+94 715719663</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
