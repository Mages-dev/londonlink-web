import styles from "./BgRightRoundedFade.module.css"
import { RoundedFadeProps } from '@/interfaces'

const BgRightRoundedFade: React.FC<RoundedFadeProps> = ({ top = 0, children }) => {
  return (
    <div
      className={`${styles.gradientContainer}`}
      style={{
        '--top': top,
      } as React.CSSProperties}>
      <div className={`${styles.gradient}`}>
        {children}
      </div>
    </div>
  );
};

export default BgRightRoundedFade;