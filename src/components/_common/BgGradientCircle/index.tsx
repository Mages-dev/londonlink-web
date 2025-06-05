import styles from "./BgGradientCircle.module.css"
import { BgCircleProps } from '@/interfaces'

const BgGradientCircle: React.FC<BgCircleProps> = ({ x = "50%", y = "50%", radius = 300}) => {
  return (
    <div className={`${styles.gradientContainer}`}>
      <div
        className={`${styles.gradient}`}
        style={{
          '--x': x,
          '--y': y,
          '--radius': radius,
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default BgGradientCircle;