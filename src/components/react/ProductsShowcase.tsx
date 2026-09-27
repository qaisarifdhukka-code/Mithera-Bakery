import React, { useRef, useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows, useProgress, OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  { 
    id: "kaju-katli",
    title: "Kaju Katli", 
    desc: "A timeless classic. Rich, melt-in-your-mouth cashew fudge adorned with delicate silver leaf.",
    path: "/images/Kaju katli.glb"
  },
  { 
    id: "karachi-halwa",
    title: "Karachi Halwa", 
    desc: "Vibrant, chewy, and generously packed with premium roasted nuts for the perfect crunch.",
    path: "/images/Karachi halwa.glb"
  },
  { 
    id: "aflatun",
    title: "Aflatun", 
    desc: "An indulgent baked sweet crafted with rich mawa, farm-fresh eggs, and semolina.",
    path: "/images/Aflatun.glb"
  }
];

// Preload models
if (typeof window !== "undefined") {
  products.forEach(p => useGLTF.preload(p.path));
}

interface ModelProps {
  path: string;
  isActive: boolean;
  index: number;
  activeIndex: number;
  isMobile: boolean;
}

const Model = ({ path, isActive, index, activeIndex, isMobile }: ModelProps) => {
  const { scene } = useGLTF(path) as any;
  const ref = useRef<THREE.Group>(null);
  
  // Clone the scene so we don't mutate the cached original
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  
  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Scale animation: smaller on mobile so it fits the screen
    const baseScale = isMobile ? 0.65 : 1.5;
    const inactiveScale = 0;
    const targetScale = isActive ? baseScale : inactiveScale;
    ref.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.15);
    
    const activeY = isMobile ? 0.3 : 0.4; // Shift model on mobile
    let targetY = activeY;
    if (index < activeIndex) {
      targetY = 20; // Slide up completely out of the screen
    } else if (index > activeIndex) {
      targetY = -20; // Slide down completely out of the screen
    }
    
    // Smoothly interpolate the Y position (slower for a natural, elegant feel)
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.05);
  });

  const activeY = isMobile ? 0.3 : 0.4;

  return (
    <Float floatIntensity={isActive ? 1 : 0} rotationIntensity={isActive ? 0.2 : 0} speed={1.5}>
      {/* Tilt the group forward so we can see the top of the sweets */}
      <group rotation={[0.4, 0, 0]}>
        <primitive 
          ref={ref} 
          object={clonedScene} 
          position={[0, index > 0 ? -8 : activeY, 0]} // Initial position
          rotation={[0, -Math.PI / 6, 0]} 
          scale={index === 0 ? (isMobile ? 0.65 : 1.5) : (isMobile ? 0.45 : 1.0)} // Initial scale
        />
      </group>
    </Float>
  );
};

function LoadingOverlay() {
  const { active, progress } = useProgress();
  
  return (
    <div 
      className={`absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-cream)] transition-opacity duration-1000 ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <h2 className="text-brand-dark text-xl md:text-3xl mb-6 font-medium text-center px-4" style={{ fontFamily: "var(--font-heading)" }}>Loading Heritage Collection...</h2>
      <div className="w-64 h-[2px] bg-brand-dark/20 overflow-hidden mb-3">
        <div 
          className="h-full bg-brand-dark transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-brand-dark/70 text-xs font-semibold tracking-[0.2em]">{Math.round(progress)}%</p>
    </div>
  );
}

export default function ProductsShowcase() {
  const outerRef = useRef(null);
  const containerRef = useRef(null);
  const stRef = useRef<any>(null); // Store ScrollTrigger instance
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen for initial render and resize
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keyboard Navigation for Desktop
  React.useEffect(() => {
    if (isMobile) return; 
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      
      // We only want to trigger this if the user has scrolled down to the showcase section
      // A simple check is if the showcase is visible in viewport, but goToIndex handles smooth scrolling nicely.
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (activeIndex < products.length - 1) {
          e.preventDefault();
          goToIndex(activeIndex + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (activeIndex > 0) {
          e.preventDefault();
          goToIndex(activeIndex - 1);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isMobile]);

  useGSAP(() => {
    if (window.innerWidth < 1024) return; // Disable GSAP scroll-jacking on mobile completely

    const totalItems = products.length;
    const headerHeight = 112; 
    
    stRef.current = ScrollTrigger.create({
      trigger: outerRef.current,
      start: `top ${headerHeight}px`,
      end: `+=${totalItems * 60}%`,
      pin: containerRef.current,
      scrub: 1,
      onUpdate: (self) => {
        const rawIndex = self.progress * totalItems;
        let index = Math.floor(rawIndex);
        if (index >= totalItems) index = totalItems - 1;
        setActiveIndex((prev) => (prev !== index ? index : prev));
      }
    });

  }, { scope: outerRef });

  const goToIndex = (index: number) => {
    const totalItems = products.length;
    if (index < 0 || index >= totalItems) return;
    
    if (window.innerWidth < 1024) {
      setActiveIndex(index);
      return;
    }

    if (!stRef.current) return;
    const start = stRef.current.start;
    const end = stRef.current.end;
    const targetScroll = start + ((index + 0.1) / totalItems) * (end - start);
    
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };
  
  // Custom Touch Slider Logic for Mobile Scroll Wheel
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);
  
  const handleWheelTouchStart = (e: React.TouchEvent) => {
    // We intentionally DO NOT stopPropagation here so we don't break react events, 
    // but we can prevent default in raw DOM if needed. React passive events might complain if we preventDefault.
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(15);
  };
  
  const handleWheelTouchMove = (e: React.TouchEvent) => {
    // Prevent the native page scroll!
    if (e.cancelable) e.preventDefault();
    
    const currentY = e.touches[0].clientY;
    const diff = touchStartY.current - currentY;
    const timeDiff = Date.now() - (touchStartTime.current || Date.now());
    const velocity = Math.abs(diff) / (timeDiff || 1);
    
    // Swipe UP (drag up) -> Next Product (triggers on 40px drag OR fast flick > 15px)
    if (diff > 40 || (velocity > 0.8 && diff > 15)) {
      if (activeIndex < products.length - 1) {
        setActiveIndex(prev => prev + 1);
        touchStartY.current = currentY; // Reset to require another drag
        touchStartTime.current = Date.now();
        if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(10);
      }
    } 
    // Swipe DOWN (drag down) -> Prev Product
    else if (diff < -40 || (velocity > 0.8 && diff < -15)) {
      if (activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
        touchStartY.current = currentY;
        touchStartTime.current = Date.now();
        if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(10);
      }
    }
  };

  return (
    <div ref={outerRef} className="w-full relative">
      {/* 
        This is the pinned container. 
        It stays on screen while the outer container scrolls.
      */}
      <div ref={containerRef} className="w-full h-[calc(100dvh-84px)] lg:h-[calc(100dvh-112px)] overflow-hidden text-brand-dark relative bg-transparent" style={{ fontFamily: "var(--font-body)" }}>
        
        <LoadingOverlay />
        
        {/* 3D Canvas Context */}
        <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
          <Canvas 
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={isMobile ? [1, 1.25] : [1, 2]} 
            gl={{ powerPreference: "high-performance", antialias: false }}
            performance={{ min: 0.5 }}
          >
            <ambientLight intensity={2} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2.5} castShadow />
            <Environment preset="city" resolution={256} />
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={1.5}
              target={[0, 0.4, 0]} 
              enableDamping={true}
              dampingFactor={0.05}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2 + 0.1}
            />
            
            <Suspense fallback={null}>
              {products.map((p, i) => (
                <Model key={p.id} path={p.path} index={i} activeIndex={activeIndex} isActive={activeIndex === i} isMobile={isMobile} />
              ))}
            </Suspense>
            
            <ContactShadows position={[0, isMobile ? -0.5 : -1.1, 0]} opacity={0.3} scale={10} blur={2.5} far={4} color="#3A241A" frames={1} resolution={256} />
          </Canvas>
        </div>
        
        {/* HTML UI Overlay (Interactive & Readable) */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between px-6 py-2 lg:px-16 lg:pt-2 lg:pb-12 font-sans">
          
          {/* Mobile Safe Scroll Wheel */}
          {isMobile && (
            <div 
              className="group absolute right-2 top-[60%] -translate-y-1/2 h-[260px] w-[50px] bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-md border border-[#E5B55C]/50 rounded-full z-[100] pointer-events-auto flex flex-col items-center justify-center gap-2 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),0_4px_12px_rgba(58,36,26,0.05)] touch-none select-none transition-all duration-300 opacity-60 hover:opacity-100 active:opacity-100 active:scale-95 active:bg-[#1a120d] active:border-transparent"
              onTouchStart={handleWheelTouchStart}
              onTouchMove={handleWheelTouchMove}
              onWheel={(e) => {
                e.stopPropagation(); 
                e.preventDefault(); 
                if (e.deltaY > 0 && activeIndex < products.length - 1) goToIndex(activeIndex + 1);
                if (e.deltaY < 0 && activeIndex > 0) goToIndex(activeIndex - 1);
              }}
            >
              {/* Live Tracker Line (Left Edge) */}
              <div className="absolute left-[6px] top-8 bottom-8 w-[2px] bg-brand-dark/10 rounded-full pointer-events-none overflow-hidden group-active:bg-white/10 transition-colors duration-300">
                <div 
                  className="absolute top-0 left-0 w-full bg-[#E5B55C] rounded-full transition-transform duration-500 ease-out group-active:bg-white"
                  style={{ height: '33.33%', transform: `translateY(${activeIndex * 100}%)` }}
                />
              </div>
              {/* Up Arrow */}
              <svg className="w-4 h-4 text-brand-dark/40 group-active:text-white/70 transition-colors duration-300 mb-1 pointer-events-none animate-bounce group-active:animate-none group-hover:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
              
              {/* Top Ridges */}
              {[...Array(4)].map((_, i) => (
                <div key={`top-${i}`} className="w-4 h-[2px] bg-brand-dark/20 group-active:bg-white/40 transition-colors duration-300 rounded-full pointer-events-none" />
              ))}
              
              {/* Text */}
              <span className="text-[7px] font-bold tracking-[0.15em] text-brand-dark/50 group-active:text-white/80 transition-colors duration-300 my-1 pointer-events-none whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>HOLD & SCROLL</span>
              
              {/* Bottom Ridges */}
              {[...Array(4)].map((_, i) => (
                <div key={`bot-${i}`} className="w-4 h-[2px] bg-brand-dark/20 group-active:bg-white/40 transition-colors duration-300 rounded-full pointer-events-none" />
              ))}

              {/* Down Arrow */}
              <svg className="w-4 h-4 text-brand-dark/40 group-active:text-white/70 transition-colors duration-300 mt-1 pointer-events-none animate-bounce group-active:animate-none group-hover:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg> 
            </div>
          )}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full h-full relative">
            
            {/* Left Sidebar: Categories Navigation & Titles */}
            <div className="w-full lg:w-1/3 flex flex-col justify-start lg:justify-center relative z-30 pt-1 lg:pt-0">
              <div className="relative border-l border-brand-dark/20 pl-6 lg:pl-8 py-2 lg:py-4 flex flex-col gap-2">
                
                {products.map((p, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <div 
                      key={p.id} 
                      className="relative flex items-center min-h-[32px] lg:min-h-[40px] cursor-pointer"
                      onClick={() => goToIndex(i)}
                    >
                       {/* The dot on the line */}
                       <div className={`absolute left-[-29px] lg:left-[-37px] w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] rounded-full transition-all duration-300 ${isActive ? 'bg-brand-dark scale-100' : 'bg-[var(--color-cream)] border-[1.5px] border-brand-dark/40 scale-75'}`} />
                       
                       <div className="relative flex items-center py-1 lg:py-2">
                          <h2 
                            className={`transition-all duration-500 origin-left text-brand-dark ${
                              isActive 
                                ? 'text-[42px] lg:text-[48px] font-medium leading-none opacity-100' 
                                : 'text-[11px] lg:text-[12px] font-bold tracking-[0.1em] uppercase opacity-50 cursor-pointer'
                            }`} 
                            style={{ fontFamily: isActive ? "var(--font-heading)" : "var(--font-body)" }}
                          >
                            {p.title}
                          </h2>
                       </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Mobile Pagination Arrows (underneath product titles) */}
              <div className="flex lg:hidden items-center gap-4 text-brand-dark font-medium mt-6 pointer-events-auto">
               <button 
                 onClick={() => goToIndex(activeIndex - 1)}
                 disabled={activeIndex === 0}
                 className={`w-9 h-9 rounded-full border border-brand-dark/30 flex items-center justify-center transition-colors ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-brand-dark/10 cursor-pointer'}`}
               >
                 &uarr;
               </button>
               <span className="text-[13px] tracking-widest font-semibold opacity-70">
                 0{activeIndex + 1} <span className="opacity-50 mx-1">/</span> 0{products.length}
               </span>
               <button 
                 onClick={() => goToIndex(activeIndex + 1)}
                 disabled={activeIndex === products.length - 1}
                 className={`w-9 h-9 rounded-full border border-brand-dark/30 flex items-center justify-center transition-colors ${activeIndex === products.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-brand-dark/10 cursor-pointer'}`}
               >
                 &darr;
               </button>
              </div>
            </div>
            
            {/* Center spacer */}
            <div className="hidden lg:block w-1/3"></div>

            {/* Right Sidebar: Additional Tags / Info */}
            <div className="w-full lg:w-1/3 flex flex-col justify-end lg:justify-center items-start lg:items-end z-30 pb-16 lg:pb-0 absolute lg:static bottom-0 left-0 pl-6 lg:pl-0 pointer-events-none">
              {products.map((p, i) => {
                const isActive = activeIndex === i;
                return (
                  <div 
                    key={`tags-${p.id}`} 
                    className={`absolute bottom-4 lg:bottom-0 left-6 lg:left-auto lg:right-0 flex flex-col items-start lg:items-end gap-3 lg:gap-6 transition-all duration-700 w-full lg:w-auto ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  >
                    <div className="flex flex-wrap justify-start lg:justify-end gap-2 lg:gap-3 max-w-[280px]">
                      {/* Fake sub-tags */}
                      {['Premium', 'Traditional', 'Gift', 'Assorted'].map(tag => (
                        <span key={tag} className="border border-brand-dark/40 rounded-full px-4 py-1.5 lg:px-5 lg:py-2 text-[12px] lg:text-[14px] font-medium text-brand-dark bg-white/10 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a href="/shop" className="no-underline bg-[#E5B55C] text-brand-dark px-6 py-3 lg:px-8 lg:py-3.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#d4a34b] transition-colors pointer-events-auto cursor-pointer shadow-sm text-[14px] lg:text-[15px] max-w-[240px]">
                      Show products <span className="text-xl leading-none">&rarr;</span>
                    </a>
                  </div>
                );
              })}
            </div>
            
          </div>
          
          {/* Bottom Bar: Pagination & Controls (Desktop Only) */}
          <div className="hidden lg:flex w-full justify-center items-end pb-2 z-30 pointer-events-auto relative mt-0">
             
             {/* Pagination Arrows */}
             <div className="flex items-center gap-4 text-brand-dark font-medium">
               <button 
                 onClick={() => goToIndex(activeIndex - 1)}
                 disabled={activeIndex === 0}
                 className={`w-10 h-10 rounded-full border border-brand-dark/30 flex items-center justify-center transition-colors ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-brand-dark/10 cursor-pointer'}`}
               >
                 &uarr;
               </button>
               <span className="text-sm tracking-widest font-semibold opacity-70">
                 0{activeIndex + 1} <span className="opacity-50 mx-1">/</span> 0{products.length}
               </span>
               <button 
                 onClick={() => goToIndex(activeIndex + 1)}
                 disabled={activeIndex === products.length - 1}
                 className={`w-10 h-10 rounded-full border border-brand-dark/30 flex items-center justify-center transition-colors ${activeIndex === products.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-brand-dark/10 cursor-pointer'}`}
               >
                 &darr;
               </button>
             </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}
