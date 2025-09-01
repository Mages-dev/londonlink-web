import styles from "./BgLeftRoundedFade.module.css"
import { RoundedFadeProps } from "@/interfaces"

const BgLeftRoundedFade: React.FC<RoundedFadeProps> = ({ top = 0, children }) => {
  return (
    <div
      className={`${styles.gradientContainer}`}
      style={{
        '--top': top,
      } as React.CSSProperties}>
      <div className={`gradient-left`}>
        {children}
      </div>
    </div>
  );
};

export default BgLeftRoundedFade;