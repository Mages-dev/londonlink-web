import styles from "./BgFadedCircle.module.css"
import { BgCircleProps } from '@/interfaces'

const BgFadedCircle: React.FC<BgCircleProps> = ({ x = "50%", y = "50%", radius = "200"}) => {
  return (
    <div className={`${styles.fadedContainer}`}>
      <div
        className={`${styles.faded}`}
        style={{
          '--x': x,
          '--y': y,
          '--radius': radius,
        } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default BgFadedCircle;