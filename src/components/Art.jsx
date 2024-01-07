import React, { useRef, useState, useEffect,Suspense } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { Scroll, shopify } from '../assets';
import images from '../assets/images';
import { tesla,starbucks, meta} from '../assets';
import { Beer, Camera, Helmet } from '../assets';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';
import { EarthCanvas } from './canvas';
import { GlassCanvas } from './canvas';
import { HelmetCanvas } from './canvas';
import { CameraCanvas } from './canvas';
import { useAppContext } from '../App';





const Art = () => {

  const { handle3DButtonClick } = useAppContext();
  const { is3DButtonClicked }  = useAppContext ();


  const [width, setWidth] = useState(0);
  const [toggleState, setToggleState] = useState(0);
  const carousel = useRef();
  const artSectionRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  const secondButtonRef = useRef();

  useEffect(() => {

    console.log(carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    const handleScroll = () => {
      const boundingBox = artSectionRef.current.getBoundingClientRect();
      setIsVisible(boundingBox.top < window.innerHeight && boundingBox.bottom >= 0);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);


  const [canvasType, setCanvasType] = useState('computer'); // Default to computer canvas

  const ImageList = [
    {
      id: 1,
      img: Beer,
    },
    {
      id: 2,
      img: Helmet,
    },
    {
      id: 3,
      img: Camera,
    },
  ];

  const handleImageClick = (itemId) => {
    // Determine which canvas to render based on the selected image
    if (itemId === 1) {
      setCanvasType('computer');
    } else if (itemId === 2) {
      setCanvasType('earth');
    } else {
      // Set default canvas type (computer) for meta or any other image
      setCanvasType('Camera');
    }
  };

  // const handle3DButtonClick = () => {
  //   setToggleState(1); // Set the state to indicate that the 3D button has been clicked
  //   setIs3DButtonClicked(true); // Set the state to indicate that the 3D button has been clicked
  // };


  return (
    <div ref={artSectionRef} style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Content */}
      <motion.div className={`${styles.paddingY}`} style={{ flex: 1 }}>
        <p className={styles.sectionSubText}>what I have been designing </p>
        <h2 className={styles.sectionHeadText}>Visual Design.</h2>

        <div style={{  display: 'flex', justifyContent: 'flex-end'  }}>
          <motion.button
            whileHover={{ backgroundColor: 'blue' }}
            style={{ width: '100px', height: '40px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor:"lightblue" }}
            onClick={() => setToggleState(0)}
          >
            2D
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: 'blue' }}
            style={{ width: '100px', height: '40px', margin: '10px', border: 'none', borderRadius: '5px', backgroundColor:"lightblue" }}
            onClick={handle3DButtonClick} // Add the event listener for the 3D button click
          >
            3D
          </motion.button>
          <motion.button
            ref={secondButtonRef}
            whileHover={{ backgroundColor: 'blue' }}
            style={{
              width: '100px',
              height: '40px',
              margin: '10px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: 'transparent', // Make it transparent
              position: 'absolute',
            }}
            onClick={() => setToggleState(1)} // Add the event listener for the 2D button click
          />


        </div>
      </motion.div>

      {/* Toggle State Content */}
      {toggleState === 0 && (
        <div>
          <motion.div ref={carousel} className="carousel">
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
              {images.map((image) => {
                return (
                  <motion.div className="item" key={image}>
                    <img src={image} alt="" />
                    <motion.div
                      style={{
                        width: '4rem',
                        height: '4rem',
                        marginTop: '30px',
                      }}
                      animate={{
                        x: [0, 400], // Horizontal movement
                        opacity: [1, 0.5, 1], // Flashing effect
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                      }}
                    >
                      <img src={Scroll} alt="" style={{ width: '100%', height: '100%' }} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      )}

      {toggleState === 1 && (
        <div style={{ flex: 1 }}>
                <div className="min-h-[650px] bg-gray-100 bg-about">
        <div className="min-h-[650px] flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
               {/* text content section */}
               <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    {canvasType === 'computer' && (
                       <motion.div
                       initial={{ opacity: 0, x: -100}} // Initial state (hidden and moved to the left)
                       animate={{ opacity: 1, x: 0 }}    // Animation state (visible and at the original position)
                       transition={{ duration: 0.8 }}   // Transition duration
                       data-aos="zoom-out"
                       className={`${styles.paddingX} text-5xl sm:text-6xl lg:text-7xl font-bold`}
                     >
                       Take a look at my <span className="text-[#915eff]">Beer Bottle</span>
                     </motion.div>
                    )}
                    {canvasType === 'earth' && (
                      <motion.div
                      initial={{ opacity: 0, x: -100}} // Initial state (hidden and moved to the left)
                      animate={{ opacity: 1, x: 0 }}    // Animation state (visible and at the original position)
                      transition={{ duration: 0.8 }}   // Transition duration
                      data-aos="zoom-out"
                      className={`${styles.paddingX} text-5xl sm:text-6xl lg:text-7xl font-bold`}
                    >
                        Take a look at my <span className="text-[#915eff]">Star War Helmet</span>
                      </motion.div>
                    )}
                    {canvasType === 'Camera' && (
                       <motion.div
                       initial={{ opacity: 0, x: -100}} // Initial state (hidden and moved to the left)
                       animate={{ opacity: 1, x: 0 }}    // Animation state (visible and at the original position)
                       transition={{ duration: 0.8 }}   // Transition duration
                       data-aos="zoom-out"
                       className={`${styles.paddingX} text-5xl sm:text-6xl lg:text-7xl font-bold`}
                     >
                        Take a look at my <span className="text-[#915eff]">Micro Camera</span>
                      </motion.div>
                    )}
                    <p data-aos="fade-up" className={`${styles.paddingX} text-sm`}>
                      All Model were created completely from scratch without using any assets, the work is done by blender and fusion 360. Due to three.js render engine, the quality of the 3d Models
                      might be slightly lower than the actual model. They are just example of my works, I have created more models to be presented.
                    </p>
                 
                  </div>
              {/* Image section */}
              <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <div data-aos="fade-left" data-aos-delay="300">
                  {/* <img
                    src={imageId}
                    alt="biryani img"
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                  /> */}
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <div data-aos="zoom-in" data-aos-offset="0">
                      <img
                        key={item.id}
                        src={item.img}
                        onClick={() => handleImageClick(item.id)}
                        alt="biryani img"
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      />

                    </div>
                  ))}

                  </div>
                  
                  {canvasType === 'computer' && <GlassCanvas isVisible={isVisible} />}
                  {canvasType === 'earth' && <HelmetCanvas isVisible={isVisible}/>}
                  {canvasType === 'Camera' && <CameraCanvas isVisible={isVisible}/>}
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Art, "");
