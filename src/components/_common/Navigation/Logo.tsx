"use client";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "@/context";

const Logo = () => {
  const [showButton, setShowButton] = useState(false);
  const objectRef = useRef<HTMLObjectElement>(null);
  const { theme } = useTheme();

  const updateSvgColors = () => {
    try {
      const svgDoc = objectRef.current?.contentDocument;
      const targetGroup = svgDoc?.getElementById('Group_2');
      
      if (targetGroup) {
        const style = getComputedStyle(document.documentElement);
        const logoColor = style.getPropertyValue('--logo-link-color').trim();
        targetGroup.setAttribute('fill', logoColor);
      }
    } catch (error) {
      console.error('Error updating SVG:', error);
    }
  };

  useEffect(() => {
    updateSvgColors();
  }, [theme]);

  useEffect(() => {
    const handleLoad = () => updateSvgColors();
    
    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleLoad);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(updateSvgColors, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 400 && window.innerWidth < 768);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <object
        ref={objectRef}
        type="image/svg+xml"
        data="/img/logo.svg"
        aria-label="LondonLink"
        onLoad={() => {
          updateSvgColors();
          setTimeout(updateSvgColors, 300);
        }}
        style={{ 
          width: 'auto', 
          height: '90px',
          opacity: showButton ? 0 : 1,
          transition: 'opacity 0.3s'
        }}
      />
  );
};

export default Logo;