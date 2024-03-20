import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MyName from './MyName';

type ZoomEffectProps = {
    finishedLoading: boolean;
    isZoomed?: boolean;
  };
export default function ZoomEffect(props: { finishedLoading: boolean, isZoomed: boolean }){
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scale based on the window scroll position
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; // Adjust the divisor to control the zoom speed
      setScale(newScale);
    };

    // Listen for scroll events on the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img src="/img/laptopscreen.svg" className="absolute top-0 left-0 w-full h-full z-10" alt="Laptop Screen" />
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale }}
        transition={{ duration: 0.2 }}
        className="relative z-20"
      >
        <MyName finishedLoading={props.finishedLoading} />
      </motion.div>
      <img src="/img/sunglasses.svg" className="absolute top-0 left-0 w-full h-full z-30" alt="Sunglasses" />
    </div>
  );
}