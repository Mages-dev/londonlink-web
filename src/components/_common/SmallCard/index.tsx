import { useRef, useEffect } from "react";
import { useTheme } from "@/context";
import styles from "./SmallCard.module.css"
import { SmallCardProps } from '@/interfaces'

const SmallCard: React.FC<SmallCardProps> = ({ title = "No title", icon = "error", children }) => {
  const objectRef = useRef<HTMLObjectElement>(null);
  const { theme } = useTheme();

  const updateSvgColors = () => {
    try {
      const svgDoc = objectRef.current?.contentDocument;
      const targetGroup = svgDoc?.getElementById('Icon');
      
      if (targetGroup) {
        const style = getComputedStyle(document.documentElement);
        const iconColor = style.getPropertyValue('--home-card-icon-color').trim();
        targetGroup.setAttribute('fill', iconColor);
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

  return (
    <div className={styles.card}>
      <div className={styles.iconFrame}>
        <object
          ref={objectRef}
          type="image/svg+xml"
          data={`/img/icons/${icon}.svg`}
          aria-label={title}
          onLoad={updateSvgColors}
          style={{ 
            width: '32px', 
            height: '32px'
          }}
        />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>{children}</p>
    </div>
  );
};

export default SmallCard;