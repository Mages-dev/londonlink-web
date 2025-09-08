import { useState, useEffect } from 'react';
import parentStyles from "../../Home.module.css"
import { BgCircleProps } from "@/interfaces"
import BgGradientCircle from "@/Common/BgGradientCircle"
import styles from "./FotoMulher.module.css"

const FotoMulher: React.FC<BgCircleProps> = ({ x = "0", y = "0", radius = "290" }) => {
  const [adjustedRadius, setAdjustedRadius] = useState(radius);
  const [adjustedX, setAdjustedX] = useState(x);
  const [adjustedY, setAdjustedY] = useState(y);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500 && window.innerWidth > 400) {
        setAdjustedRadius("260");
        setAdjustedX("8%");
        setAdjustedY("22%");
      } else if (window.innerWidth <= 400) {
        setAdjustedRadius("250");
        setAdjustedX("6%");
        setAdjustedY("30%");
      } else {
        // <FotoMulher x="47%" y="25%" radius="290" />
        setAdjustedRadius(radius);
        setAdjustedX(x);
        setAdjustedY(y);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [radius, x, y]);
  
	return (
    <div className={`${parentStyles.fotoMulherContainer} ${styles.principalContainer}`}>
      <div
        className={`${styles.principal}`}
        style={{
          '--x': adjustedX,
          '--y': adjustedY,
          '--radius': adjustedRadius,
        } as React.CSSProperties}
      >
        <BgGradientCircle radius={adjustedRadius} />
        <div className={`${parentStyles.fotoMulher} ${styles.fotoPrincipal}`}></div>
      </div>
    </div>
	)
}

export default FotoMulher