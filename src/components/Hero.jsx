import { motion, useAnimation } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import { useAppContext } from '../App';


const TypingEffect = () => {
  const typedRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 640px)').matches);

  useEffect(() => {
    const options = {
      strings: ['3D/2D Graphics', 'User Interfaces', '3D Games', 'Web Applications'],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 640px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup the Typed instance on component unmount
      typed.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const typingEffectStyles = {
    fontSize: isSmallScreen ? '1.5rem' : '3rem', // Adjust the font size as needed
    fontWeight: 'bold', // Optionally, adjust the font weight
  };

  return <span ref={typedRef} style={typingEffectStyles} />;
};

const Hero = () => {

  

  const { handle3DButtonClick } = useAppContext(); // Use handle3DButtonClick directly
  const { is3DButtonClicked } = useAppContext();

  const [reloadSection, setReloadSection] = useState(false);
  const heroSectionRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    console.log('handleIntersection called');
    if (entry.isIntersecting) {
      // Check if both conditions are met: user scrolled back and 3D button clicked
      console.log('is intersecting');
      console.log('the 3d button is '  + is3DButtonClicked);
      // if (reloadSection) {
      //   // Reload or reinitiate the entire section
      //   resetSection();
      //   // You can add additional logic here to reload or reinitiate the section
      //   // For example, you can reset other state variables or perform necessary actions
      // }

      resetSection();
    }
  };

  const resetSection = () => {
    // Add logic to reset the necessary state variables

    if(reloadSection === "true"){
      setReloadSection(false);
    }else{

      setReloadSection(true);
    }

    console.log('reload the entire page');
    // You can reset other state variables here

    // Additional logic to perform actions needed for the reset
    // For example, if you have specific actions to perform, you can add them here
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [reloadSection]);


  return (
    <section key={reloadSection} ref={heroSectionRef} className="relative w-full h-screen mx-auto bg-dark-brown overflow-hidden bg-hero">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 snowflakes">
          {/* White snowflakes line */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
              className="w-5 h-5 rounded-full bg-white"
            />
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
              className="w-5 h-5 rounded-full bg-[#2c1d17]"
            />
            {/* Add more snowflakes as needed */}
          </div>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Chirs</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop <div className="typing-effect-container"><TypingEffect className = " xs:text-sm" /></div>
          </p>
          
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-5 bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
